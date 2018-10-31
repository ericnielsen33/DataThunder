import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { JwtPayload } from '../interfaces/jwt.payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(
        private readonly userService: UserService,
        ) {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: 'secretKey',
        });
    }
    async validate(payload: JwtPayload, done): Promise<any> {
        console.log(payload);
        await this.userService.findOneByEmail(payload.email)
            .then(user => {
                return user;
            })
            .catch(err => {
                console.log(err);
                done(err, false);
            });
    }
}
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local'){
    constructor(
        private readonly userService: UserService,
        ){
        super({
            usernameField: 'email',
            passReqToCallback: false,
        });
    }
    async validate(email: string, password: string, done) {
        await this.userService.findByEmailAndValidatePassword(email, password)
            .then(user => {
                done(null, user);
            })
            .catch(err => done(err, false));
    }
}
export const callback = (err, user, info) => {
    if (typeof info !== 'undefined') {
        throw new UnauthorizedException(info.message);
    } else if (err || !user) {
        throw err || new UnauthorizedException();
    }
    return user;
};
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy} from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import { BearerStrategy } from './passport/bearer.strategy';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, BearerStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
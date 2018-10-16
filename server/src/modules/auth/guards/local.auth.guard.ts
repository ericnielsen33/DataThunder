import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
   canActivate(
       context: ExecutionContext,
   ){
       super.logIn(context.switchToHttp().getRequest());
       return super.canActivate(context);
   }
   handleRequest(err, user){
       if (err || !user) {
           throw err || new UnauthorizedException();
       }
       return user;
   }
}
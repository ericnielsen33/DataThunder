import { ExecutionContext } from '@nestjs/common';
declare const LocalAuthGuard_base: import("@nestjs/passport/dist/interfaces/type.interface").Type<import("@nestjs/passport/dist/auth.guard").IAuthGuard>;
export declare class LocalAuthGuard extends LocalAuthGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs/internal/Observable").Observable<boolean>;
    handleRequest(err: any, user: any): any;
}
export {};

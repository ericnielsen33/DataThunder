import { UserService } from '../../user/user.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(email: string, password: string, done: any): Promise<void>;
}
export declare const callback: (err: any, user: any, info: any) => any;
export {};

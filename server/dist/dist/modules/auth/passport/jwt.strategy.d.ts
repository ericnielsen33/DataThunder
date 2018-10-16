import { UserService } from '../../user/user.service';
import { JwtPayload } from '../interfaces/jwt.payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validateUser(payload: JwtPayload, done: any): Promise<any>;
}
export {};

import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("entity/User").User[]>;
    createNewUser(user: any): Promise<import("entity/User").User>;
}

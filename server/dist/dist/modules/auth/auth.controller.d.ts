import { Response } from 'express';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: any, response: Response): Promise<import("express-serve-static-core").Response>;
    register(request: any): Promise<void>;
    test(response: Response): Promise<void>;
}

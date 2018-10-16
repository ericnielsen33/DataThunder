import { Controller, Post, Req, Res, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignupDTO } from './dtos/signup.dto';

@Controller('auth')
export class AuthController{
    constructor(
        private readonly authService: AuthService,
        ){
    }
    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Req() request, @Res() response: Response){
        try {
            const user = await this.authService.login(request.user.id);
            return response.send(user);
        } catch (error) {
            return response.send(error);
        }
    }
    @Post('register')
    async register(@Body('newUser') newUser: SignupDTO, @Res() response: Response){
        try {
            const user = await this.authService.signup(newUser);
            return response.send(user);
        } catch (error) {
            return response.send(error);
        }
    }
}
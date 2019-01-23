import { Controller, Post, Req, Res, Body, UseGuards } from '@nestjs/common';
import _ from 'lodash';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { SignupDTO } from './dtos/signup.dto';
import { LoginResponseDTO } from '../../../../shared/src/modules/auth/DTOs/login.response.dto';
import { LoginRequestDTO } from '../../../../shared/src/modules/auth/DTOs/login.request.dto';

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
            const res: LoginResponseDTO = Object.assign(user, {password: undefined});
            return response.send(res);
        } catch (error) {
            return response.send(error);
        }
    }
    @Post('register')
    async register(@Body('newUser') newUser: SignupDTO, @Res() response: Response){
        try {
            const user = await this.authService.signup(newUser);
            const res: LoginResponseDTO = Object.assign(user, { password: undefined });
            return response.send(res);
        } catch (error) {
            return response.send(error);
        }
    }
}
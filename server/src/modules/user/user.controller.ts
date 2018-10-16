import { Inject } from '@nestjs/common';
import { Controller, Get, Post, Body, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(AuthGuard('bearer'))
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}
  @Get()
  async findAll(@Res() response) {
    const users = await this.userService.findAll();
    return response.send(users);
  }
  @Post()
  createNewUser(@Body('user') user) {
    const newUser = this.userService.createUser(user);
    return newUser;
  }
}
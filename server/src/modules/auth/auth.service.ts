import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignupDTO } from './dtos/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}
  async signup(newUser: SignupDTO): Promise<any>{
    const existingUser = await this.userService.findOneByEmail(newUser.email);
    if (existingUser) {
      return false;
    } else {
      return await this.userService.createUser(newUser);
    }
  }
  async login(id: number): Promise<any> {
   return await this.userService.findOneAndSetToken(id);
  }
  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.userService.findOneByToken(token);
  }
}
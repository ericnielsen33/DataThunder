import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { OrganizationService } from 'modules/organization/organization.service';
import { SignupDTO } from './dtos/signup.dto';
import { User } from 'entity/User';
import { Organization } from 'entity/Organization';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly organizationService: OrganizationService,
    ) {}
  async signup(newUser: SignupDTO): Promise<any> {
    const existingUser = await this.userService.findOneByEmail(newUser.email);
    if (existingUser) {
      return false;
    } else {
      return await this.userService.createUser(newUser);
    }
  }
  async signupAndRegisterOrg(newUser: SignupDTO, newOrg: string): Promise<any> {
    let user: User = await this.userService.findOneByEmail(newUser.email);
    let organization: Organization = await this.organizationService.findOneByName(newOrg);
    if ( user || organization) return false;
    user = await this.userService.createUser(newUser);
    organization = await this.organizationService.createOrganization(newOrg, user);
    return {user, organization};
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
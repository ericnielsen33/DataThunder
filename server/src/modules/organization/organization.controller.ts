import { Inject, Param, Req } from '@nestjs/common';
import { Controller, Get, Post, Body, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrgService } from './organization.service';
import { RolesGuard } from 'modules/auth/guards/roles.auth.guard';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { Organization } from 'entity/Organization';
import { User } from 'entity/User';
import { Request } from 'express';
import { O_RDONLY } from 'constants';

export interface IRequest {
  user: User;
}

@Controller('organizations')
@UseGuards(AuthGuard('bearer'), RolesGuard)
export class OrgController {
  constructor(@Inject(OrgService) private readonly orgService: OrgService) {}

  @Get()
  @Roles('admin')
  async getAll() {
    return await this.orgService.getAll();
  }

  @Post()
  @Roles('admin')
  async create(@Body('organization')org: Organization) {
    return await this.orgService.create(org);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Req() req: Request & IRequest){
    const userOrgs = req.user.organizations.map(item => item.id);
    if (userOrgs.includes(Number(id))) {
      return await this.orgService.findOne(id);
    }
    return false;
  }

  @Post(':id/users')
  @Roles('admin', 'org_admin', 'org_support')
  async insertUsers(@Param('id') id: number, @Body('user') user){
    return await this.orgService.update(id);
  }
}

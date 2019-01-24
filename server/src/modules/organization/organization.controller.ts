import { Inject } from '@nestjs/common';
import { Controller, Get, Post, Body, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrgService } from './organization.service';
import { RolesGuard } from 'modules/auth/guards/roles.auth.guard';
import { Roles } from 'modules/auth/guards/roles.decorator';
import { Organization } from 'entity/Organization';

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
    return this.orgService.create(org);
  }
}

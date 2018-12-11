import { Controller, Post, Req, Res, Body, UseGuards, Inject, Get, ReflectMetadata, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrganizationService } from './organization.service';
import { Response } from 'express';
import { RolesGuard } from 'modules/auth/guards/roles.auth.guard';
import { Roles } from 'modules/auth/guards/roles.decorator';

@Controller('organizations')
@UseGuards(AuthGuard('bearer'), RolesGuard)
export class OrganizationController {
  constructor(
    @Inject(OrganizationService)
    private readonly organizationService: OrganizationService,
  ) {}

  @Post()
  async createOrg(
    @Body('organizationName') organizationName: string,
    @Req() req,
    @Res() res: Response,
  ) {
    const user = req.user;
    const organization = await this.organizationService.createOrganization(
      organizationName,
      user,
    );
    res.send({ organization, user });
  }

  @Get()
  @Roles('admin')
  async findAll(@Req() request, @Res() res: Response): Promise<void> {
    const organizations = await this.organizationService.findAll();
    res.send({ organizations });
  }

}
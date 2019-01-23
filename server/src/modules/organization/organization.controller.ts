import { Inject } from '@nestjs/common';
import { Controller, Get, Post, Body, UseGuards, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrgService } from './organization.service';

@Controller('organizations')
@UseGuards(AuthGuard('bearer'))
export class OrgController {
  constructor(@Inject(OrgService) private readonly orgService: OrgService) {}
}

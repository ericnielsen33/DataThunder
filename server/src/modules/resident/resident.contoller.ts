import { Controller, Post, Req, Res, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { ResidentService } from './resident.service';
import { Resident } from '../../entity/Resident';

@Controller('residents')
@UseGuards(AuthGuard('bearer'))
export class ResidentController {
  constructor(private readonly residentService: ResidentService){}
  @Post()
  async createResident(@Req() req, @Res() res: Response): Promise<void> {
    const relatedUser = req.user;
    const resident: Resident = await this.residentService.createResident(relatedUser);
    res.send({resident});
  }
}
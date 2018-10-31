import { Controller, Get, Post, Req, Res, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { Patient } from 'entity/Patient';
import { PatientService } from './patient.service';

@Controller('teams')
@UseGuards(AuthGuard('bearer'))
export class PatientController {
    constructor(private readonly patientService: PatientService) { }
    @Post()
    async createPatient(@Body() team, @Req() request, @Res() response: Response): Promise<void> {
        response.send();
    }
}
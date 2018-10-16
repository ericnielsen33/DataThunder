import {Inject, Controller, Post, Get, Req, Res, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { TeamService } from './team.service';
import { Team } from 'entity/Team';

@Controller('teams')
@UseGuards(AuthGuard('bearer'))
export class TeamController {
    constructor(@Inject(TeamService) private readonly teamService: TeamService){}
    @Post()
    async createTeam(@Body() team, @Req() request, @Res() response: Response): Promise<void>{
        const { name } = team;
        const { user } = request.user;
        const newTeam = await this.teamService.createTeam(name, user);
        response.send(newTeam);
    }

    @Get(':id')
    async getTeam(@Param() params){}

    @Get()
    async getAllTeams(){
        return await this.teamService.findAllTeams();
    }
}
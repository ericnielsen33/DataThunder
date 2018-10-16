import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from '../../entity/Team';
import { User } from 'entity/User';
import { Patient } from 'entity/Patient';
import { Resident } from 'entity/Resident';
import { Service } from 'entity/Service';

@Injectable()
export class TeamService {
    constructor(@InjectRepository(Team) private readonly teamRepository: Repository<Team>) {}
    /**
     * createTeam
     */
    public async createTeam(name: string, owner: User): Promise<Team> {
        const team = new Team();
        team.name = name;
        team.owner = owner;
        return await this.teamRepository.save(team);
    }
    /**
     * findTeamByName
     */
    public async findTeamByName(teamName: string): Promise<Team> {
        return await this.teamRepository.findOneOrFail({ name: teamName });
    }
    /**
     * findAllTeams
     */
    public async findAllTeams(): Promise<Team[]> {
        return await this.teamRepository.find();
    }

    /**
     * updateTeam
     */
    public async updateTeam(team: Team, patient?: Patient, resident?: Resident, service?: Service): Promise<Team> {
        team.patients.push(patient);
        team.teamMembers.push(resident);
        team.services.push(service);
        return await this.teamRepository.save(team);
    }
}
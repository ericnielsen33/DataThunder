import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resident } from '../../entity/Resident';
import { User } from 'entity/User';

@Injectable()
export class ResidentService {
    constructor(@InjectRepository(Resident) private readonly residentRepository: Repository<Resident>){}
    /**
     * createResident
     */
    public async createResident(user: User) {
        const newResident: Resident = new Resident();
        newResident.user = user;
        return await this.residentRepository.save(newResident);
    }
}
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Organization } from 'entity/Organization';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entity/User';
import { UserService } from 'modules/user/user.service';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>,
        private readonly userService: UserService,
        ){}
    async createOrganization(name: string, user: User): Promise< Organization | undefined>{
        let organizatiion = await this.organizationRepository.findOne({ name });
        if (organizatiion) return undefined;
        organizatiion = new Organization();
        organizatiion.name = name;
        organizatiion.owner = user;
        organizatiion.users = [];
        organizatiion.users.push(user);
        return await this.organizationRepository.save(organizatiion);
    }

    async findOneByName(name: string): Promise<Organization | undefined>{
        return await this.organizationRepository.findOne({ name });
    }

    async findAll(): Promise<Organization[]> | undefined{
        return await this.organizationRepository.find({relations: ['owner', 'users']});
    }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from 'entity/Organization';

@Injectable()
export class OrgService {
  constructor(
    @InjectRepository(Organization)
    private readonly orgRepository: Repository<Organization>,
  ) {}
    async getAll(): Promise<Organization[]>{
      return await this.orgRepository.find({});
    }
    async findOne(id: number): Promise<Organization>{
      return await this.orgRepository.findOne({ id });
    }
    async create(org: Organization): Promise<Organization>{
      return await this.orgRepository.save(org);
    }
    async update(id): Promise<Organization>{
      const org = await this.orgRepository.findOne({ id });
      return await this.orgRepository.save(org);
    }
}
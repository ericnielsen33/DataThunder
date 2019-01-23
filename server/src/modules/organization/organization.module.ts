import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from 'entity/Organization';
import { OrgService } from './organization.service';
import { OrgController } from './organization.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Organization])],
    providers: [OrgService],
    controllers: [OrgController],
})
export class OrganizationModule { }

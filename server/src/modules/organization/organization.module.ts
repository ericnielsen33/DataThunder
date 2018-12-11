import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from 'entity/Organization';
import { OrganizationController } from './organization.controller';
import { UserModule } from 'modules/user/user.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Organization]),
        UserModule,
    ],
    providers: [OrganizationService],
    controllers: [OrganizationController],
    exports: [OrganizationService],
})
export class OrganizationModule {}

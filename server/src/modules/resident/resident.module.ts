import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resident } from 'entity/Resident';
import { ResidentService } from './resident.service';
import { ResidentController } from './resident.contoller';

@Module({
  imports: [TypeOrmModule.forFeature([Resident])],
  providers: [ResidentService],
  controllers: [ResidentController],
})
export class ResidentModule {}

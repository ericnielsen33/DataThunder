import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HashService } from './hash.service';
import { User } from '../../entity/User';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, HashService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
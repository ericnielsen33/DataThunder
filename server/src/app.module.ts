import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { ResidentModule } from 'modules/resident/resident.module';
import { UserModule } from './modules/user/user.module';
import { OrganizationModule } from 'modules/organization/organization.module';
import { LoggerMiddleware } from 'middleware/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(), AuthModule, ResidentModule, UserModule, OrganizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly connection: Connection,
    ) {}
    configure(consumer: MiddlewareConsumer){
      consumer.apply(LoggerMiddleware).forRoutes('/');
    }
}

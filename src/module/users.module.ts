import { Module } from '@nestjs/common';
import { UsersService } from 'src/service/users.service';
import { DatabaseModule } from './database.module';
import { usersProviders } from 'src/providers/users.providers';
import { UsersController } from 'src/controller/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...usersProviders, UsersService],
})
export class UsersModule {}

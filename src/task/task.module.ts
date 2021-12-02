import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { TaskModel } from '../models/task.model';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    SequelizeModule.forFeature([TaskModel]),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {

}

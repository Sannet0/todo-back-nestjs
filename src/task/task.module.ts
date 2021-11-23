import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskModel } from '../models/task.model';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [SequelizeModule.forFeature([TaskModel])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {

}

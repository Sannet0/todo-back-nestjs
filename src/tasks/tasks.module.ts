import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { TaskModel } from "../models/task.model";

@Module({
  imports: [SequelizeModule.forFeature([TaskModel])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}

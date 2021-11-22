import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { TasksModel } from "./tasks.model";

@Module({
  imports: [SequelizeModule.forFeature([TasksModel])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}

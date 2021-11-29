import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { JwtModule } from '@nestjs/jwt';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskModel } from "../models/task.model";

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
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}

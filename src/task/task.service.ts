import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { TaskModel } from '../models/task.model';
import { CreateTaskDto } from './dto/creating-task.dto';
import { SetTaskStatusDto } from './dto/status-task.dto';
import { RemoveTaskDto } from './dto/removing-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(TaskModel) private taskRepository: Repository<TaskModel>) {}

  async createTask(dto: CreateTaskDto) {
    return await this.taskRepository.create(dto);
  }

  async deleteTask(dto: RemoveTaskDto) {
    const {id} = dto
    return await this.taskRepository.destroy({
      where: {
        id
      }
    });
  }

  async setTaskStatus(dto: SetTaskStatusDto) {
    const {isComplete, id} = dto;
    return await this.taskRepository.update({ isComplete }, {
      where: {
        id
      }
    });
  }

}

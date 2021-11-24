import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { TaskModel } from '../models/task.model';
import { ICreateTask } from '../interfaces/create-task-interface';
import { IChangeTask } from '../interfaces/change-task-interface';
import { ISetStatusTask } from '../interfaces/set-status-task-interface';

@Injectable()
export class TaskService {
  constructor(@InjectModel(TaskModel) private taskRepository: Repository<TaskModel>) {}

  async createTask(task: ICreateTask) {
    return await this.taskRepository.create(task);
  }

  async deleteTask(task: IChangeTask) {
    const {id} = task;
    return await this.taskRepository.destroy({
      where: {
        id
      }
    });
  }

  async setTaskStatus(task: ISetStatusTask) {
    const {isCompleted, id} = task;
    return await this.taskRepository.update({ isCompleted }, {
      where: {
        id
      }
    });
  }

}

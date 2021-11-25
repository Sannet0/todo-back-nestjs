import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { TaskModel } from "../models/task.model";
import { Repository } from "sequelize-typescript";

@Injectable()
export class TasksService {
  constructor(@InjectModel(TaskModel) private taskRepository: Repository<TaskModel>) {}

  async getAllTasks() {
    return await this.taskRepository.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
  }

  async deleteCompletedTask() {
    return await this.taskRepository.destroy({
      where: {
        isCompleted: true
      }
    });
  }

  async setAllComplete() {
    return await  this.taskRepository.update({ isCompleted: true }, {
      where: {
        isCompleted: false
      }
    });
  }
}

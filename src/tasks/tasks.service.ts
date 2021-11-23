import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { TaskModel } from "../models/task.model";
import { Repository } from "sequelize-typescript";

@Injectable()
export class TasksService {
  constructor(@InjectModel(TaskModel) private taskRepository: Repository<TaskModel>) {}

  async getAllTasks() {
    return await this.taskRepository.findAll();
  }

  async deleteCompletedTask() {
    return await this.taskRepository.destroy({
      where: {
        isComplete: true
      }
    });
  }

  async setAllComplete() {
    return await  this.taskRepository.update({ isComplete: true }, {
      where: {
        isComplete: false
      }
    });
  }
}

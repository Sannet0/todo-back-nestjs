import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from "./dto/creating-task.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TasksModel } from "./tasks.model";
import { Repository } from "sequelize-typescript";
import { RemoveTaskDto } from "./dto/removing-task.dto";
import { SetTaskStatusDto } from "./dto/status-task.dto";

@Injectable()
export class TasksService {
  constructor(@InjectModel(TasksModel) private taskRepository: Repository<TasksModel>) {}

  async getAllTasks() {
    return await this.taskRepository.findAll();
  }

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

  async deleteCompletedTask() {
    return await this.taskRepository.destroy({
      where: {
        isComplete: true
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

  async setAllComplete() {
    return await  this.taskRepository.update({ isComplete: true }, {
      where: {
        isComplete: false
      }
    });
  }
}

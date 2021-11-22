import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from "./dto/creating-task.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TasksModel } from "./tasks.model";

@Injectable()
export class TasksService {
  constructor(@InjectModel(TasksModel) private taskRepository: typeof TasksModel) {}

  async getAllProducts() {
    return await this.taskRepository.findAll();
  }

  async createProduct(dto: CreateTaskDto) {
    return await this.taskRepository.create(dto);
  }
}

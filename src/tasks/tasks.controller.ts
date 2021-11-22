import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from "./dto/creating-task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAllProducts();
  }

  @Post()
  add(@Body() taskDto: CreateTaskDto) {
    return this.tasksService.createProduct(taskDto);
  }

}

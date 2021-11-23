import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from "./dto/creating-task.dto";
import { RemoveTaskDto } from "./dto/removing-task.dto";
import { SetTaskStatusDto } from "./dto/status-task.dto";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  add(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }

  @Delete()
  delete(@Query() dto: RemoveTaskDto) {
    return this.tasksService.deleteTask(dto);
  }

  @Delete("complete")
  deleteCompleted() {
    return this.tasksService.deleteCompletedTask();
  }

  @Patch()
  setStatus(@Body() dto: SetTaskStatusDto) {
    return this.tasksService.setTaskStatus(dto);
  }

  @Patch("all")
  setAllComplete(){
    return this.tasksService.setAllComplete();
  }

}

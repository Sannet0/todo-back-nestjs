import { Controller, Delete, Get, Patch, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtGuard)
  @Get()
  getAll() {
    return this.tasksService.getAllTasks();
  }

  @UseGuards(JwtGuard)
  @Delete("complete")
  deleteCompleted() {
    return this.tasksService.deleteCompletedTask();
  }

  @UseGuards(JwtGuard)
  @Patch("all")
  setAllComplete(){
    return this.tasksService.setAllComplete();
  }

}

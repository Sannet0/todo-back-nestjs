import { Body, Controller, Delete, Patch, Post, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/creating-task.dto';
import { RemoveTaskDto } from './dto/removing-task.dto';
import { SetTaskStatusDto } from './dto/status-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  add(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }

  @Delete(':id')
  delete(@Param() dto: RemoveTaskDto) {
    return this.taskService.deleteTask(dto);
  }

  @Patch(':id/:isComplete')
  setStatus(@Param() dto: SetTaskStatusDto) {
    return this.taskService.setTaskStatus(dto);
  }
}

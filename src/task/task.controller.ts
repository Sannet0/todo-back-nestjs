import { Body, Controller, Delete, Patch, Post, Param, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/creating-task.dto';
import { ChangeTaskDto } from './dto/change-task.dto';
import { StatusTaskDto } from './dto/status-task.dto';
import { JwtGuard } from '../guards/jwt.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtGuard)
  @Post()
  add(@Body() dto: CreateTaskDto) {
    return this.taskService.createTask(dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  delete(@Param() dto: ChangeTaskDto) {
    return this.taskService.deleteTask(dto);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  setStatus(@Param() paramDto: ChangeTaskDto, @Body() bodyDto: StatusTaskDto) {
    return this.taskService.setTaskStatus({ id: paramDto.id, isCompleted: bodyDto.isCompleted });
  }
}

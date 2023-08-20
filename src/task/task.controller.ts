import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(readonly taskService: TaskService) {}

  @Get()
  getTask(): any {
    return this.taskService.getTask();
  }

  @Get('/:taskId')
  getTaskById(@Param('taskId') taskId: number): any {
    return this.taskService.getTaskByID(taskId);
  }

  @Post()
  createTask(@Body() body): any {
    const { id, title, description, status, dueDate } = body;
    return this.taskService.createTask(id, title, description, status, dueDate);
  }

  @Put()
  updateTask(@Body() body): any {
    const { id, title, description, status, dueDate } = body;
    return this.taskService.updateTask(id, title, description, status, dueDate);
  }

  @Delete('/:taskId')
  deleteTask(@Param('taskId') taskId: number): any {
    return this.taskService.deleteTask(taskId);
  }
}

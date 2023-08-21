import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.constant';
import { TaskModel } from 'src/models/model';

@Injectable()
export class TaskService {
  getTask(): any {
    return Tasks;
  }

  getTaskByID(taskId): any {
    return Tasks.find((task) => task.id === parseInt(taskId));
  }

  createTask(taskId, title, description, status, dueDate): any {
    if (Tasks.find((task) => task.id === taskId)) {
      return 'Duplicate Ids are not allowed.';
    }
    if (Tasks.find((task) => task.title === title)) {
      return 'Title with this task already exits';
    }
    const newTask = new TaskModel(taskId, title, description, status, dueDate);
    Tasks.push(newTask);
    return newTask;
  }

  updateTask(taskId, title, description, status, dueDate): any {
    const taskIndex = Tasks.findIndex((task) => task.id === parseInt(taskId));
    Tasks[taskIndex].title = title;
    Tasks[taskIndex].description = description;
    Tasks[taskIndex].status = status;
    Tasks[taskIndex].dueDate = dueDate;
    Tasks[taskIndex].updatedAt = new Date();
    return Tasks;
  }

  deleteTask(taskId): any {
    for (let i = Tasks.length - 1; i >= 0; i--) {
      if (Tasks[i].id === parseInt(taskId)) {
        Tasks.splice(i, 1);
      }
    }
    return Tasks;
  }
}

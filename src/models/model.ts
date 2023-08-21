type TaskStatus = 'Not Started' | 'In Progress' | 'Completed';

interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class TaskModel implements Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    status: TaskStatus,
    dueDate: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

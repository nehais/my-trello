import { taskActivity } from './task-activity';

export interface Task {
  taskId: number;
  taskTitle: string;
  activities: taskActivity[];
}

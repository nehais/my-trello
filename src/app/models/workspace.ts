import { Task } from './task';

export interface Workspace {
  id: number;
  title: string;
  tasks: Task[];
}

import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/task';
import { taskActivity } from 'src/app/models/task-activity';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input()
  task: Task | undefined;
  newAct: boolean = false;
  newTask: boolean = false;

  addList() {
    let newTask: Task = {
      taskId: 10,
      taskTitle: '',
      activities: [{ taskActId: 10, name: '', desc: '' }],
    };
    this.task = newTask;
    this.newTask = true;
  }

  addNewAct() {
    let newTaskAct: taskActivity = { taskActId: 10, name: '', desc: '' };
    this.task?.activities.push(newTaskAct);
    this.newAct = true;
  }
}

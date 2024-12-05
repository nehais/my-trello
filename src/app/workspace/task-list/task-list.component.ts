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
  newTask: boolean = false;

  addNewList() {
    let emptyTask: Task = {
      taskId: 10,
      taskTitle: '',
      activities: [{ taskActId: 10, name: '', desc: '' }],
    };
    this.task = emptyTask;
    this.newTask = true;
  }

  cancelNewList() {
    if (this.task) {
      this.task = undefined;
      this.newTask = false;
    }
  }

  addNewAct() {
    let newTaskAct: taskActivity = { taskActId: 10, name: '', desc: '' };
    this.task?.activities.push(newTaskAct);
  }

  cancelNewAct() {
    if (this.task && this.task.activities) {
      this.task.activities.splice(this.task.activities.length - 1, 1);
    }
  }
}

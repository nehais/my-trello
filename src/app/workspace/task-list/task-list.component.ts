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

  addList() {}

  addNewAct() {
    let newTask: taskActivity = { taskActId: 10, name: '', desc: '' };
    this.task?.activities.push(newTask);
    this.newAct = true;
  }
}

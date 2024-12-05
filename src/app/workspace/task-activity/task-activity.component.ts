import { Component, Input } from '@angular/core';
import { taskActivity } from 'src/app/models/task-activity';

@Component({
  selector: 'app-task-activity',
  templateUrl: './task-activity.component.html',
  styleUrls: ['./task-activity.component.css'],
})
export class TaskActivityComponent {
  @Input() activities: taskActivity[] = [];
}

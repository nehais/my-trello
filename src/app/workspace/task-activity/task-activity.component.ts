import { Component, inject, Input } from '@angular/core';
import { taskActivity } from 'src/app/models/task-activity';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ActivityFormComponent } from '../activity-form/activity-form.component';

@Component({
  selector: 'app-task-activity',
  templateUrl: './task-activity.component.html',
  styleUrls: ['./task-activity.component.css'],
})
export class TaskActivityComponent {
  @Input() activities: taskActivity[] = [];
  readonly dialog = inject(MatDialog);

  drop(event: CdkDragDrop<taskActivity[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openEditActForm(activity: taskActivity): void {
    const dialogRef = this.dialog.open(ActivityFormComponent, {
      data: activity,
    });

    dialogRef.afterClosed().subscribe((result: taskActivity) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        activity.desc = result.desc;
        activity.date = result.date;
      }
    });
  }
}

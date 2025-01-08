import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { taskActivity } from 'src/app/models/task-activity';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css'],
})
export class ActivityFormComponent {
  readonly dialogRef = inject(MatDialogRef<ActivityFormComponent>);
  readonly data = inject<taskActivity>(MAT_DIALOG_DATA);
  activity = this.data;
  onNoClick(): void {
    this.dialogRef.close();
  }
}

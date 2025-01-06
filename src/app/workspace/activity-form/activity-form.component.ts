import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css'],
})
export class ActivityFormComponent {
  readonly dialogRef = inject(MatDialogRef<ActivityFormComponent>);
  //readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  //readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

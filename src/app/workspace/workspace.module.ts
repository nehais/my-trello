import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskActivityComponent } from './task-activity/task-activity.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivityFormComponent } from './activity-form/activity-form.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    SideBarComponent,
    TaskListComponent,
    TaskActivityComponent,
    AddButtonComponent,
    ActivityFormComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatDialogModule,
  ],
  exports: [SideBarComponent],
})
export class WorkspaceModule {}

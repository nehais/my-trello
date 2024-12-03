import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WorkspaceComponent, SideBarComponent, TaskListComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [SideBarComponent],
})
export class WorkspaceModule {}

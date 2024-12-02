import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [WorkspaceComponent, SideBarComponent, TaskListComponent],
  imports: [CommonModule],
  exports: [SideBarComponent],
})
export class WorkspaceModule {}

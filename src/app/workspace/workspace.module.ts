import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace/workspace.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [WorkspaceComponent, SideBarComponent],
  imports: [CommonModule],
  exports: [SideBarComponent],
})
export class WorkspaceModule {}

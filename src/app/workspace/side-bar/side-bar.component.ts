import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Workspace } from 'src/app/models/workspace';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input()
  workspaces: Workspace[] | undefined;
  @Input()
  sideBarCollapsed: Boolean = false;
  @Output() toggleCollapse = new EventEmitter<string>();

  toggleCollapseSideBar() {
    this.toggleCollapse.emit();
  }
}

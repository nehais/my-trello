import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { Task } from 'src/app/models/task';
import { Workspace } from 'src/app/models/workspace';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit {
  id: number = 0;
  workspace: Workspace | undefined;
  workspaces: Workspace[] | undefined;
  sideBarCollapsed: boolean = false;
  newTask: Task | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  ngOnInit(): void {
    this.homeService
      .getWorkspacesByID(this.id)
      .subscribe((oneWorkspace) => (this.workspace = oneWorkspace));

    this.homeService
      .getWorkspaces()
      .subscribe((allWorkspaces) => (this.workspaces = allWorkspaces));
  }

  toggleCollapse() {
    this.sideBarCollapsed = !this.sideBarCollapsed;
  }
}

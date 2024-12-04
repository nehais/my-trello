import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from 'src/app/home/home.service';
import { Task } from 'src/app/models/task';
import { Workspace } from 'src/app/models/workspace';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  workSubscription: Subscription;
  id: number = 0;
  workspace: Workspace | undefined;
  workspaces: Workspace[] | undefined;
  sideBarCollapsed: boolean = false;
  newTask: Task | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) {
    this.workSubscription = this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];

      //Moved from ngOnInit for reload on same Navigation
      this.homeService
        .getWorkspacesByID(this.id)
        .subscribe((oneWorkspace) => (this.workspace = oneWorkspace));

      this.homeService
        .getWorkspaces()
        .subscribe((allWorkspaces) => (this.workspaces = allWorkspaces));
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.workSubscription.unsubscribe();
  }

  toggleCollapse() {
    this.sideBarCollapsed = !this.sideBarCollapsed;
  }
}

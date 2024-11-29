import { Component, OnInit } from '@angular/core';
import { Workspace } from '../models/workspace';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  workspaces$: Observable<Workspace[]> | undefined;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.workspaces$ = this.homeService.getWorkspaces();
  }

  cards = [
    { title: 'Nest & Rest' },
    { title: 'Loot Scoot & Boot' },
    { title: 'Story Echoes' },
    { title: 'Loot Scoot & Boot' },
    { title: 'Story Echoes' },
    { title: 'Loot Scoot & Boot' },
    { title: 'Story Echoes' },
    { title: 'Loot Scoot & Boot' },
    { title: 'Story Echoes' },
  ];
}

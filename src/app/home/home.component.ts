import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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

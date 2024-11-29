import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css'],
})
export class BoardCardComponent {
  pastalColors = [
    '#FF968A',
    '#55CBCD',
    '#CBAACB',
    '#97C1A9',
    '#F3B0C3',
    '#C6DBDA',
    '#8FCACA',
  ];
  backColorIdx = Math.floor(Math.random() * this.pastalColors.length);
  backColor = this.pastalColors[this.backColorIdx];

  @Input()
  card: any;
}

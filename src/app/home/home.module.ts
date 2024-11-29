import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BoardCardComponent } from './board-card/board-card.component';

@NgModule({
  declarations: [HomeComponent, BoardCardComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BoardCardComponent } from './board-card/board-card.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, BoardCardComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HomeComponent],
})
export class HomeModule {}

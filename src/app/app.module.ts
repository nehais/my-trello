import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    FooterModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-US' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

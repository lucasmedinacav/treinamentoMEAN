import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [HomeRoutingModule, BrowserModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }

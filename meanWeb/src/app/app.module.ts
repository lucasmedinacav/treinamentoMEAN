import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import {TranslateService,TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
//import { TranslateService } from "@ngx-translate/core";
//import { TranslateStore } from "@ngx-translate/core/src/translate.store";
import {TranslateModule} from "ng2-translate";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    TranslateModule.forRoot()],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

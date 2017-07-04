import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './principal/principal.module';
import { TranslateModule } from "ng2-translate";

import { LoginModal } from './login-modal/login-modal.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import 'rxjs/add/operator/map';

import "../polyfills";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginModal,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    TranslateModule.forRoot(),
    PrincipalModule,
    BootstrapModalModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent],
  entryComponents: [LoginModal]
})
export class AppModule { }

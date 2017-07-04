import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Usuario } from './../register/user.object';
import { Facebook, Google, LinkedIn } from 'ng2-cordova-oauth/core';
import { OauthBrowser } from 'ng2-cordova-oauth/platform/browser';
import { Router } from '@angular/router'

export class LoginModalContext extends BSModalContext { }

@Component({
  styles: [],
  styleUrls: ['login-modal.component.css'],
  templateUrl: 'login-modal.component.html'
})
export class LoginModal implements CloseGuard, ModalComponent<LoginModalContext> {

  public usuario: Usuario;
 

  constructor(public dialog: DialogRef<LoginModalContext>,  private router : Router) {
    this.usuario = new Usuario;
  }

private oauth: OauthBrowser = new OauthBrowser();

  private facebookProvider: Facebook = new Facebook({
    clientId: "271358782886816",
    appScope: ["public_profile", "email"],
    redirectUri: "http://localhost:4200/home",
    responseType: "code"
  });
  private googleProvider: Google = new Google({
    clientId: "985360581770-f9ooms1qdevdf1pjf27b6lkr32fbs6a0.apps.googleusercontent.com",
    appScope: ["email"],
    redirectUri: "http://localhost:4200/callback",
    responseType: "code"
  });
  private linkedinProvider: LinkedIn = new LinkedIn({
    clientId: "77ogva4o62tfzo",
    appScope: ["r_basicprofile", "r_emailaddress"],
    redirectUri: "http://localhost:4200/callback",
    responseType: "code"
  });

  public facebook() {
    this.oauth.logInVia(this.facebookProvider).then((success) => {
      console.log("RESULT: " + JSON.stringify(success));
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  public google() {
    this.oauth.logInVia(this.googleProvider).then(success => { 
      this.displayData();
    }, error => {
      console.log("ERROR: ", error);
    });
  }

  displayData(){
    window.sessionStorage.setItem("usuario", "Joao Carlos");
    this.close(); 
    this.router.navigateByUrl("/logado");
  }

  public linkedin() {
    this.oauth.logInVia(this.linkedinProvider).then(success => {
      console.log("RESULT: " + JSON.stringify(success));
    }, error => {
      console.log("ERROR: ", error);
    });
  }



  close():void {
    this.dialog.close();
  }
}

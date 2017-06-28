import { Component } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModalContext, LoginModal } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Modal]
})
export class AppComponent {
  title = 'app';
  
  constructor(public modal: Modal) {}

  openLoginModal() {
    console.log("abre modal de login");
    return this.modal.open(LoginModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

}

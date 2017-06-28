import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Login } from './login.object';

export class LoginModalContext extends BSModalContext {
}

@Component({
  selector: 'modal-content',
  styles: [],
  styleUrls: ['login-modal.component.css'],
  templateUrl: 'login-modal.component.html'
})
export class LoginModal implements CloseGuard, ModalComponent<LoginModalContext> {

  public opcao: boolean;
  public login: Login;

  constructor(public dialog: DialogRef<LoginModalContext>) {
    this.opcao = true;
    this.login = {email: `batatinha@gmail.com`, senha:`12345678910`};
  }

  close():void {
    this.dialog.close();
  }
}

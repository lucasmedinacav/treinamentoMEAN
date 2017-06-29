import { Component } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Usuario } from './../register/user.object';

export class LoginModalContext extends BSModalContext { }

@Component({
  selector: 'modal-content',
  styles: [],
  styleUrls: ['login-modal.component.css'],
  templateUrl: 'login-modal.component.html'
})
export class LoginModal implements CloseGuard, ModalComponent<LoginModalContext> {

  public usuario: Usuario;

  constructor(public dialog: DialogRef<LoginModalContext>) {
    this.usuario = new Usuario;
  }

  close():void {
    this.dialog.close();
  }
}

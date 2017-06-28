import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

// export class CustomModalContext extends BSModalContext {
export class LoginModalContext extends BSModalContext {
  public num1: number;
  public num2: number;
}

@Component({
  selector: 'modal-content',
  styles: [],
  templateUrl: 'login-modal.html'
})
export class LoginModal implements CloseGuard, ModalComponent<LoginModalContext> {
  context: LoginModalContext;

  public wrongAnswer: boolean;

  constructor(public dialog: DialogRef<LoginModalContext>) {
    this.context = dialog.context;
    this.wrongAnswer = true;
    dialog.setCloseGuard(this);
  }

  onKeyUp(value) {
    this.wrongAnswer = value != 5;
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    return this.wrongAnswer;
  }
}

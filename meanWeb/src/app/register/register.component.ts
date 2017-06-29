import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModalContext, LoginModal } from './../login-modal/login-modal.component';
import { Usuario } from './user.object';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: Usuario;
  public senhaConfirmacao: string;

  constructor(public modal: Modal) {
    this.usuario = new Usuario;
   }

  ngOnInit() { }

  cadastrar(): void {
    console.log('cadastrado');
  }

  openLoginModal() {
    return this.modal.open(LoginModal, overlayConfigFactory({}, BSModalContext));
  }

}

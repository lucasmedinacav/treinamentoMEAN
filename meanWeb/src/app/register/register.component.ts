import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModalContext, LoginModal } from './../login-modal/login-modal.component';
import { Usuario } from './user.object';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  public usuario: Usuario;
  public senhaConfirmacao: string;
  public data: any;

  constructor(private http_: Http, public modal: Modal) {
    this.usuario = new Usuario;
  }

  ngOnInit() { }

  cadastrar(): void {
    console.log('cadastrado');
    let headers = new Headers({ 'contentType': 'application/json' });
    let options = new RequestOptions({ 'headers': headers });


    this.http_.get('').map((res: Response) => res.json()).subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  openLoginModal() {
    return this.modal.open(LoginModal, overlayConfigFactory({}, BSModalContext));
  }

}

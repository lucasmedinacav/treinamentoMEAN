import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModalContext, LoginModal } from './../login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';

  constructor(public modal: Modal) {}

  ngOnInit() {}

 openLoginModal() {
    return this.modal.open(LoginModal, overlayConfigFactory({}, BSModalContext));
  }

}

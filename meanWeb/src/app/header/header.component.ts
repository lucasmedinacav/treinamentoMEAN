import { Component, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { LoginModalContext, LoginModal } from './../login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public modal: Modal) { }

  ngOnInit() { }

  openLoginModal() {
    console.log(`abrindo do header`);
    return this.modal.open(LoginModal, overlayConfigFactory({}, BSModalContext));
  }

}

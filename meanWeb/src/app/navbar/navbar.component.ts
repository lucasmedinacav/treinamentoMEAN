import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LoginModal } from '../login-modal/login-modal.component';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, public modal: Modal) {
    translate.addLangs(["en", "es", "fr", "br"]);
    translate.setDefaultLang('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|fr|br/) ? browserLang : 'en');
  }

  ngOnInit() {
  }

  getBandeiraAtual(isAtual): {} {
    return {
      'bandeira-opaca': !isAtual
    };
  }

  openLoginModal() {
    console.log(`abrindo do header`);
    return this.modal.open(LoginModal, overlayConfigFactory({}, BSModalContext));
  }

}

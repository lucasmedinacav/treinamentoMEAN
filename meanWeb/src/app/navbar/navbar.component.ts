import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
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

}

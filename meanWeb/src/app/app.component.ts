import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "es", "fr", "br"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|fr|br/) ? browserLang : 'en');
    }
}

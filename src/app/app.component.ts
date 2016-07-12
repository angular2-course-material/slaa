import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [HTTP_PROVIDERS, TranslateService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private translate: TranslateService) {
    let language = 'en';

    if ((<any>navigator).languages && (<any>navigator).languages.length) {
       language = (<any>navigator).languages[0];
    } else {
       language = navigator.language || navigator.userLanguage
           || navigator.browserLanguage || navigator.systemLanguage;
    }

    translate.setDefaultLang('en');

    translate.use(language.split('-')[0]);
  }
}

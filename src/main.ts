import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, PLATFORM_PIPES } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { TranslateService, TranslateLoader, TranslateStaticLoader, TranslatePipe } from 'ng2-translate/ng2-translate';
import 'jquery';
import 'tether';
import 'bootstrap';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  {
    provide: TranslateLoader,
    useFactory: (http: Http) => new TranslateStaticLoader(http, './app/i18n', '.json'),
    deps: [Http]
  },
  {provide: PLATFORM_PIPES, useValue: TranslatePipe, multi: true},
  TranslateService
]);


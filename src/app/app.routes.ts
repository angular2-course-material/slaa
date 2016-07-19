import { provideRouter, RouterConfig }  from '@angular/router';
import { IntroComponent } from './intro';
import { SubmissionsComponent } from './submissions';
import { ProgramComponent } from './program';
import { ComitteeComponent } from './comittee';
import { RegistrationComponent } from './registration';
import { VenueComponent } from './venue';
import { PreviousEditionsComponent } from './previous-editions';
import { BanquetComponent } from './banquet';

export const routes: RouterConfig = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'submissions',
    component: SubmissionsComponent
  },
  {
    path: 'program',
    component: ProgramComponent
  },
  {
    path: 'comittee',
    component: ComitteeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'venue',
    component: VenueComponent
  },
  {
    path: 'banquet',
    component: BanquetComponent
  },
  {
    path: 'previous-editions',
    component: PreviousEditionsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AlertComponent} from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ROUTER_DIRECTIVES, AlertComponent],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

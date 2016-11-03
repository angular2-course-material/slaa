import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'app-program',
  templateUrl: 'program.component.html',
  styleUrls: ['program.component.css']
})
export class ProgramComponent implements OnInit {

  events = null;
  keynotes = null;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('PROGRAM.EVENTS').subscribe((res: string) => {
      this.events = res;
      console.log(res);
    });

    this.translate.get('PROGRAM.TALKS').subscribe((res: string) => {
      this.keynotes = res;
    });
  }

  getId(idName) {
    return '#' + idName;
  }

}

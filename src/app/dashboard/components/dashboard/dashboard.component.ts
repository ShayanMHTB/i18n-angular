import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private _translate: TranslateService) {
    _translate.setDefaultLang('en');
    _translate.use('en');
  }

  useLanguage(language: string): void {
    this._translate.use(language);
  }
}

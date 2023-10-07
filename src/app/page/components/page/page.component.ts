import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  constructor(private _translate: TranslateService) {
    _translate.setDefaultLang('en');
    _translate.use('en');
  }

  useLanguage(language: string): void {
    this._translate.use(language);
  }
}

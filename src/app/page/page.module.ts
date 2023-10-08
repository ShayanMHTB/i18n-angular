import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponent } from './components/page/page.component';

import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PageComponent }];
@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,

    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    RouterModule.forChild(routes),
  ],
  providers: [ TranslateStore ]
})
export class PageModule { }

export function httpLoaderFactory(_http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(_http, './assets/i18n/page/', '.json');
}

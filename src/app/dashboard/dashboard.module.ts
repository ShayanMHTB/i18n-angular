import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,

    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    RouterModule.forChild(routes),
  ],
  providers: [ TranslateStore ]
})
export class DashboardModule { }

export function httpLoaderFactory(_http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(_http, './assets/i18n/dashboard/', '.json');
}

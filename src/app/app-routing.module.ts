import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/components/page/page.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

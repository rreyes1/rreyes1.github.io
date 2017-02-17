import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page/page.component';

import { AuthGuard } from './_guards/auth.guard';

import { AppComponent }   from './app.component';
export const appRoutes: Routes = [
  { path: '', component: PageComponent},
  { path: 'page', component: PageComponent, canActivate : [AuthGuard] },
];
export const routing: ModuleWithProviders =
               RouterModule.forRoot(appRoutes);
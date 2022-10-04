import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './componetnt/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'services',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Modules/user/user.module').then((mod) => mod.UserModule),
  },
  { path: '**', component: PageNotFoundComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/Guards/guards.guard';
import { UserGuard } from 'src/app/Guards/user.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],

    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

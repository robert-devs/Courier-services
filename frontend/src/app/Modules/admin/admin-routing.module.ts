import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/Guards/guards.guard';
import { UserComponent } from '../user/user/user.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { AdminComponent } from './admin.component';
import { AdminModule } from './admin.module';
import { StatusComponent } from './status/status.component';
import { UsersComponent } from './users/users.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [GuardsGuard],
    component: AdminComponent,

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'view-order' },
      { path: 'view-order', component: ViewOrdersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'status', component: StatusComponent },
      { path: 'add-orders', component: AddOrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

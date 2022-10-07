import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { StatusComponent } from './status/status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightDirective } from 'src/app/highlight.directive';
import { HoverDirective } from './Directives/hover.directive';
import { SearchPipe } from 'src/app/Pipes/search.pipe';
import { UsersComponent } from './users/users.component';
import { EditComponent } from './edit/edit.component';
import { filterPipe } from 'src/app/Pipes/filter.pipe';

@NgModule({
  declarations: [
    AddOrderComponent,
    ViewOrdersComponent,
    StatusComponent,
    SearchPipe,
    filterPipe,
    AdminComponent,
    HighlightDirective,
    HoverDirective,
    UsersComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class AdminModule {}

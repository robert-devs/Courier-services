import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, FontAwesomeModule, SharedModule],
})
export class UserModule {}

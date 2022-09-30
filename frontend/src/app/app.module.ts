import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './componetnt/home/home.component';
import { NavbarComponent } from './componetnt/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './componetnt/not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GoogleMapComponent } from './shared/google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { OrderReducer } from 'src/app/Redux/reducers/ParcelReducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { authReducer } from './state/auth.reducers';
import { AuthEffects } from './state/auth.effects';
import { EffectsService } from './Redux/Effects/effects.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    GoogleMapsModule,
    StoreModule.forRoot({ order: OrderReducer, auth: authReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AuthEffects, EffectsService]),
    SharedModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

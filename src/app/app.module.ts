import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent,
    EventsComponent,
    GooglePlaceDirective,
    BookingsComponent,
    AlleventsComponent,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBixkFnS98_Hoz236ZneiZyOVHVYPng9Tw',
      libraries: ['places']
    }),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'home/:eventName', component: PaymentComponent, canActivate: [AuthGuard]},
      {path: 'dashboard/create', component: CreateEventComponent, canActivate: [AuthGuard]},
      {path: 'dashboard/myevents', component: EventsComponent, canActivate: [AuthGuard]},
      {path: 'dashboard/allevents', component: AlleventsComponent},
      {path: 'dashboard/allevents/:eventName', component: PaymentComponent, canActivate: [AuthGuard]},
      {path: 'dashboard/bookings', component: BookingsComponent, canActivate: [AuthGuard]},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

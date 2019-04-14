import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent,
    EventsComponent,
    BookingsComponent,
    AlleventsComponent,
    PaymentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjLyjAFCmazTPa3OB6zaB6WsiExPhxu_8',
    }),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'home/:eventName', component: PaymentComponent},
      {path: 'dashboard/create', component: CreateEventComponent},
      {path: 'dashboard/myevents', component: EventsComponent},
      {path: 'dashboard/allevents', component: AlleventsComponent},
      {path: 'dashboard/allevents/:eventName', component: PaymentComponent},
      {path: 'dashboard/bookings', component: BookingsComponent},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

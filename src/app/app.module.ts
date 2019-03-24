import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    CreateEventComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatStepperModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDA2z7JLHOv03Kp-OE6C2DZpW4bQ-2k4-0'
    }),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'dashboard/create', component: CreateEventComponent},
      {path: 'dashboard/events', component: EventsComponent},
      {path: '**', component: HomeComponent}
    ])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

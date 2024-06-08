import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    BookingPageComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DatePipe ]
})
export class ApplicationModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AppRoutingModule } from './app-routing.module';
import { TravelPackageComponent } from './travel-package/travel-package.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { BusBookingComponent } from './bus-booking/bus-booking.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{HttpClientModule}from'@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookTicketComponent,
    TravelPackageComponent,
    AboutUsComponent,
    ContactUsComponent,
    FlightBookingComponent,
    BusBookingComponent,
    CarBookingComponent,
    HotelbookingComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

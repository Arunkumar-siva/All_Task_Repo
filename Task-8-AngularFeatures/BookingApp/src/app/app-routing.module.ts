import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BookTicketComponent } from "./book-ticket/book-ticket.component";
import { TravelPackageComponent } from "./travel-package/travel-package.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FlightBookingComponent } from "./flight-booking/flight-booking.component";
import { BusBookingComponent } from "./bus-booking/bus-booking.component";
import { CarBookingComponent } from "./car-booking/car-booking.component";
import { HotelbookingComponent } from "./hotelbooking/hotelbooking.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
const routes: Routes=[
    {path:'',component:HomeComponent},
    {path:'book-ticket',component:BookTicketComponent},
    {path:'travel-package',component:TravelPackageComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'flight-booking',component:FlightBookingComponent},
    {path:'bus-booking',component:BusBookingComponent},
    {path:'car-booking',component:CarBookingComponent},
    {path:'hotel-booking',component:HotelbookingComponent},
    {path:'sign-up',component:SignUpComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})
export class AppRoutingModule
{

}
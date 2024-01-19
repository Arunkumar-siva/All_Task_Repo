import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.css']
})
export class HotelbookingComponent {
  HotelBooking: {
    type: string,
    numberofPersons: number,
    numberofChildrens: number,
    numberofRooms: number,
    restaurantFacilities: string,
    totalCost: number,
    number:number[]
  } = {
      type: '',
      numberofPersons: 0,
      numberofChildrens: 0,
      numberofRooms: 0,
      restaurantFacilities: '',
      totalCost:0,
      number:[1,2,3,4,5,6,7,8,9,10]
    };

  success: string = '';
  errorMessage: string = '';
  formvalueArray: any[] = [];


  bookRoom(form: NgForm) {

    if (form.valid) {


      if (this.HotelBooking.type =='Room') {
        if (this.HotelBooking.restaurantFacilities =='Yes') {
          this.HotelBooking.totalCost = (this.HotelBooking.numberofRooms * 1000) + (this.HotelBooking.numberofPersons * 500) + (this.HotelBooking.numberofChildrens * 300);
        }
        else {
          this.HotelBooking.totalCost = (this.HotelBooking.numberofRooms * 1000) ;
        }
      }
      if (this.HotelBooking.type =='Suite') {
        if (this.HotelBooking.restaurantFacilities  =='Yes') {
          (this.HotelBooking.numberofRooms * 3000) + (this.HotelBooking.numberofPersons * 500) + (this.HotelBooking.numberofChildrens * 300);
        }
        else {
          this.HotelBooking.totalCost = (this.HotelBooking.numberofRooms * 3000);
        }
      }

      console.log(form.value);
      console.log(this.HotelBooking.totalCost);
      // this.formvalueArray.push(form.value);
      // this.success="Room has been Booked";
      // form.reset();
    } else {
      this.errorMessage = "Please check the inputs"
    }
  }
}

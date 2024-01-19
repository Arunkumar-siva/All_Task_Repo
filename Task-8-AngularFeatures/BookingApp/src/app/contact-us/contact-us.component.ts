import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  EmpId:string='';
  EmpName:string='';
  Designation:string='';
  Date:string='';
  Address:string='';
  Salary:number=0;
  detailsArray:any[]=[];
  hide=false;
  state:string='Hide Salary';

  submitdetails(form:NgForm)
  {
   if(form.valid)
   {
    this.detailsArray.push(form.value);
    console.log(form.value);
    console.log(this.detailsArray);
   }
  }
  hideof()
  {
   this.hide=!this.hide;
   console.log(this.hide);
   if(this.hide==false)
   {
    this.state='Hide Salary';
   }
   else{
    this.state='UnHide Salary';
   }
   
  }
}

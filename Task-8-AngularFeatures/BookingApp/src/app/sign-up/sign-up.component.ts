import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router:Router)
  {

  }
 Name:string='';
 Password:string=''; 
 Success:string='';
 Error:string='';
 userArray:any[]=[];
submit(form:NgForm)
{

console.log(form.value);

if(form.valid)
{
  this.userArray.push(form.value);
 this.Success= "Form has been Submitted Succesfully";
//  form.reset();
//  this.router.navigate(['']);
}
else{
  this.Error="Form is invalid! Please check the inpits";

}

 





}  

}

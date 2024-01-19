import { Component } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelApp';
  message='Aspire System';
  image='https://img-c.udemycdn.com/notices/web_carousel_slide/image/2361bae0-e4fa-460b-8c16-9615a85cc471.jpg';
  address='Chennai,India.pin-600028'
  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}

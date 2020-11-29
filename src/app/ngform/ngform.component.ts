import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ngform',
  templateUrl: './ngform.component.html',
  styleUrls: ['./ngform.component.css']
})
export class NgformComponent implements OnInit {
  phone = '';
  @ViewChild('form') myForm:any;
  constructor() { }

  ngOnInit(): void {
  }

 //разблокировать/заблокировать поле телефона
 togglePhone() {
  const phone = this.myForm.controls['phone'];
  if (phone.disabled) {
    phone.enable();
    return;
  } 
  phone.disable();

}
}

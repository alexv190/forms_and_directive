import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  phone = '';

  myForm: FormGroup;

  constructor(private fb:FormBuilder) {
    //FormBuilder используется вместо конструктора new FormGroup({...})
    this.myForm = fb.group({//создает группу
      phone: fb.control({
        value: "123",
        disabled: true
      })
    })
   }

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

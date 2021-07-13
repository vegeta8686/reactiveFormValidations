import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatchPassword } from './validate-password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formValidations';
  submitted = false;
  registrationForm: any;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MatchPassword('password', 'confirmPassword') // your validation method
    }

    )
  }
  // Getter method to access formcontrols
  get myForm() {
    return this.registrationForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a form!')
      return;
    } else {
      console.log(this.registrationForm.value)
    }
  }
}

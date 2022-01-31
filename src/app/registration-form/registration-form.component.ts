import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  constructor() {}

  reactiveForm: any;
  
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        // Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        // Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      mobileNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$'),
      ]),
      emailId: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      pincode: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).([^\s]*){8,}$/),]),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  get firstname() {
    return this.reactiveForm.get('firstName');
  }
  get lastname() {
    return this.reactiveForm.get('lastName');
  }
  get mobilenumber() {
    return this.reactiveForm.get('mobileNumber');
  }
  get emailid() {
    return this.reactiveForm.get('emailId');
  }
  get cityname() {
    return this.reactiveForm.get('city');
  }
  get pincodenumber() {
    return this.reactiveForm.get('pincode');
  }
  get username() {
    return this.reactiveForm.get('userName');
  }
  get password() {
    return this.reactiveForm.get('password');
  }
  get confirmpassword() {
    return this.reactiveForm.get('confirmPassword');
  }
//Logic for submit button.
  onSubmit() {
    //submit form if all the fields are valid.
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
      this.reactiveForm.reset();
    } else {
      let key = Object.keys(this.reactiveForm.controls);
      key.filter((data) => {
        let control = this.reactiveForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
        }
      });
    }
  }
}


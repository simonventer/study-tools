import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-component',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class AppFormsComponent implements OnInit {
  //Store it in a variable called 'signUpForm' 
  @ViewChild('f') signUpForm: NgForm; //getting access to our forms
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  constructor() { }

  suggestUserName() {
    const suggestedName = 'Superuser';
    //setValue will overwrite other values
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    //pathValue wont overwrite other values, only what you are targeting
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted', form);
  // }

  // onSubmit() {
  //   console.log(this.signUpForm);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.userData.secret;
    this.user.answer = this.signUpForm.value.userData.questionAnswer;
    this.user.gender = this.signUpForm.value.userData.gender;
  }

  ngOnInit(): void {
  }

}

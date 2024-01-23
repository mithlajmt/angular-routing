import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('fname') firstNameInput: any; // Change 'any' to the appropriate type if know
  @ViewChild('regForm') form!: NgForm;

  firstName:string=''
  lastName:string=''
  dob=''
  email:string=''
  onFormSubmit(data:any){
    console.log(data);
  }


    generateUsername(){
      let userName = '';
  
      if(this.firstName.length >= 3){
        userName += this.firstName.slice(0, 3);
      }
      else {
        userName += this.firstName;
      }
  
      if(this.lastName.length >= 3){
        userName += this.lastName.slice(0, 3);
      }
      else {
        userName += this.lastName;
      }
  
      let datetime = new Date(this.dob);
      userName += datetime.getFullYear();
  
      userName = userName.toLowerCase();
  
      console.log(userName);
  
      // this.form.controls['userName'].value = userName;
      // this.form.value.userName = userName
      // console.log(this.form.value.userName)
  
      this.form.setValue({
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        phoneNumber: this.form.value.phoneNumber,
        dob: this.form.value.dob,
        gender: this.form.value.gender,
        userName: userName,
        address: {
          street1: this.form.value.address.street1,
          street2: this.form.value.address.street2,
          country: this.form.value.address.country,
          city: this.form.value.address.city,
          region: this.form.value.address.region,
          postalCode: this.form.value.address.postalCode
        }
      })
  
      // this.form.form.patchValue({
        // username: username,
        // address: {
        //   country: 'Japan'
        // }
      // })
     }
  }

  
  


import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('fname') firstNameInput: any; // Change 'any' to the appropriate type if know
  firstname:string=''
  lastname:string=''
  email:string=''
  onFormSubmit(data:any){
    console.log(data);
    
  }

  }
  


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent implements OnInit {
  
  idnum!:number;
  
  // Inject ActivatedRoute through the constructor
  constructor(private router: ActivatedRoute) { }
  
  ngOnInit(): void {
    // Use optional chaining to handle the possibility of null or undefined
    this.idnum = Number( this.router?.snapshot.paramMap.get('id'))
    console.log(this.idnum);
    
    
    // if (idParam !== null && idParam !== undefined) {
      // this.idnum = +idParam || 0;
    // }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css'],
  providers:[CourseService]

})
export class SelectedcourseComponent implements OnInit,OnDestroy {
  
  idnum!:number;
  selectedCourse:any;
  obs:any
  
  // Inject ActivatedRoute through the constructor
  constructor(private router: ActivatedRoute, private courses:CourseService) { }
  
  ngOnInit(): void {
    // Use optional chaining to handle the possibility of null or undefined
    // this.idnum = Number(this.router?.snapshot.paramMap.get('id'));


    this.obs=this.router.paramMap.subscribe((data)=>{
      this.idnum = Number(data.get('id'))
      this.selectedCourse = this.courses.courses.find((data) => data.id === this.idnum);

    })
    // console.log(this.idnum);
  
    // Corrected assignment of selectedCourse
  }
  ngOnDestroy(): void {
    this.obs.unsubscribe()
  }
  
    
    
    // if (idParam !== null && idParam !== undefined) {
      // this.idnum = +idParam || 0;
    // }
  }


import { Component,OnInit,inject } from '@angular/core';
import { CourseService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[CourseService]
})
export class CoursesComponent implements OnInit {
  coursesService = inject(CourseService);
  AllCourses!: any;
  searchQuery:any;
  router:ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.searchQuery = this.router.snapshot.queryParamMap.get('search')
    console.log(this.searchQuery);

    if(this.searchQuery==undefined || this.searchQuery == null || this.searchQuery==''){
     this.AllCourses = this.coursesService.courses
    }
    else{
      this.AllCourses = this.coursesService.courses.filter((data)=>{
         return data.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        console.log(this.AllCourses);
        
      })
    }



    
    
  }

}

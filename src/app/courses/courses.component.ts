import { Component,inject } from '@angular/core';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  // coursesService = inject(CourseService);
  // AllCourses: any[] = this.coursesService.courses;
}

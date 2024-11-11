import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  // courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor( private coursesService: CoursesService ) {
    this.courses$ = this.coursesService.list();
    //this.coursesService.list().subscribe(courses => this.courses = courses);
  }

  ngOnInit(): void {
  }

}

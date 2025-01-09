import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  // courses: Course[] = [];
  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.list().pipe(
      take(1),
      catchError((error) => {
        // console.log(error);
        this.onError('Error ao carregar cursos!');
        return of([]);
      })
    );
    console.log('CoursesComponent constructor');
    //this.coursesService.list().subscribe(courses => this.courses = courses);
  }

  ngOnInit(): void {
    console.log('CoursesComponent ngOnInit');
  }

  onError(msgError: string) {
    console.log('Abrindo diálogo de erro:', msgError);
    if (this.dialog.openDialogs.length === 0) {
      this.dialog.open(ErrorDialogComponent, {
        data: msgError,
      });
    }
  }

  onAdd() {
    //o route serve para q eu consiga pegar parametros da rota que estou
    //this.router.navigate(['courses/new'])
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}

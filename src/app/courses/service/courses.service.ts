import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  //private readonly API = '/assets/cursos.json';
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    // return this.httpClient.get<Course[]>(this.API);
    return this.httpClient.get<Course[]>(this.API).
      pipe(
        //indica que estou interessado apenas no primeiro retorno do servidor / primeira respota, sendo assim ele encerra a conexao do xjs com esse servidor
        first(),
        // delay(5000),
        //indica que assim que o servidor me devolver minha requisicao eu encerro a conexao
        //take(1),
        // tap(courses => console.log(courses))
      );
  }
}

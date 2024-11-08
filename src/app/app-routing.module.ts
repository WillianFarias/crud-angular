import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //caso seja vazio ele deve redirecionar para courses
  { path: '', pathMatch: 'full', redirectTo: 'courses'},
  //este modulo so sera carregado quando for acessado o path courses
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

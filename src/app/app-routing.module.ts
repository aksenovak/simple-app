import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {QuestionsComponent} from './pages/questions/questions.component';
import {ArticlesComponent} from './pages/articles/articles.component';

const routes: Routes = [
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: '',
    redirectTo: '/questions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

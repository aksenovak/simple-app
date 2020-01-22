import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionsComponent} from './pages/questions/questions.component';
import { RenderListComponent } from './pages/common/render-list/render-list.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ListFiltersComponent } from './pages/common/list-filters/list-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    RenderListComponent,
    ArticlesComponent,
    ListFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

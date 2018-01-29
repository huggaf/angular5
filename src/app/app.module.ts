import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CoursesService } from './courses.service';
import { AuthorsService } from './authors.service';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { LikeComponent } from './like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

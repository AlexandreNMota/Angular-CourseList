import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CourseModule } from './cursos/curso.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: '**', component: Error404Component },      
    ]),
    CommonModule,
    HttpClientModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { CourseModule } from './cursos/curso.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './core/component/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },   
      {
        path: '**', component: Error404Component},   
    ]),
    CommonModule,
    HttpClientModule,
    CourseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

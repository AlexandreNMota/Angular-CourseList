import { Component, OnInit } from '@angular/core';
import { Course } from './Curso';
import { CourseService } from './cursos.service';

@Component({
  templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {  
  _courses: Course[] = [];

  _filterBy!: string ;
  filteredCourses: Course[] = [];

  constructor(private courseService: CourseService) { }
  
  ngOnInit(): void { 
    this.retrieveAll();
}

retrieveAll(): void { 
    this.courseService.retrieveAll().subscribe({
        next: courses => {
            this._courses = courses;
            this.filteredCourses = this._courses;
        },
        error: err => console.log('Error', err) 
    })
}

deleteById(id: any): void {
    this.courseService.deleteById(id).subscribe({
      next: () => {
        console.log('Deleted with success');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
}  


  set filter(value: string) {
    this._filterBy = value;    
    this.filteredCourses = this._courses.filter((course:Course) => (course.nome?.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) !== -1));
  }
  get filter(){
    return this._filterBy;
  }
}
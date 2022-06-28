import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./Curso";
import { CourseService } from "./cursos.service";

@Component({
    templateUrl: './curso-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course?: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){ }
    ngOnInit(): void {
        /*this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);  */ 
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err),
        });      
    }

    save(): void{
        this.courseService.save(this.course).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err),
        });      
    }

}
import {Course} from './Curso';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

var COURSES: Course[] = [
    {
        id: 1,
        nome: 'Angular: CLI',
        imageurl: '/assets/images/cli.png',
        price: 12.99,
        code: 'XLF-1212',
        duration: 120,
        rating: 3
    },
    {
        id: 2,
        nome: 'Angular: Forms',
        imageurl: '/assets/images/forms.png',
        price: 24.99,
        code: 'DWQ-3412',
        duration: 80,
        rating: 3.5,
    },
    {
        id: 3,
        nome: 'Angular: HTTP',
        imageurl: '/assets/images/http.png',
        price: 36.99,
        code: 'QPL-0913',
        duration: 80,
        rating: 4.0,
    },
    {
        id: 4,
        nome: 'Angular: Router',
        imageurl: '/assets/images/router.png',
        price: 46.99,
        code: 'OHP-1095',
        duration: 80,
        rating: 4.5
    },
    {
        id: 5,
        nome: 'Angular: Animations',
        imageurl: '/assets/images/animations.png',
        price: 86.99,
        code: 'PWY-9381',
        duration: 80,
        rating: 5
    }
];


@Injectable({
    providedIn: 'root'
})
export class CourseService{
    private coursesUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }
    retrieveById(id: number): Observable<Course>{
        /*let teste =  COURSES.find((courseIterator: Course) => courseIterator.id === id)!;
        let i: keyof typeof teste;
        for (i in teste){
            console.log(teste[i]);
        }
        return COURSES.find((courseIterator: Course) => courseIterator.id === id)!;*/
        return this.httpClient.get<Course>(this.coursesUrl + '/' + id);
    }

    save(course: any): Observable<Course>{
        if (course.id){
            return this.httpClient.put(`${this.coursesUrl}/${course.id}`, course);
            /*
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
            COURSES[index] = course; */
            
        } else{
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }        
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete(`${this.coursesUrl}/${id}`);
    }

}
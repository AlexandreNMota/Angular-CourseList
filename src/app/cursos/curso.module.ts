import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./curso-info.component";
import { CursosComponent } from "./cursos.component";

@NgModule({
    declarations: [
        CursosComponent,
        CourseInfoComponent,
        

    ],
    imports: [
        CommonModule,
        StarModule,
        AppPipeModule,
        FormsModule,
        RouterModule.forChild([
                { path: 'courses', component: CursosComponent },
                {path: 'courses/info/:id', component: CourseInfoComponent},
                     
              ]),


    ],
})
export class CourseModule{

}
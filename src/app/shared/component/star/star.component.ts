import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "cursos-teste-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]    
})

export class StarComponent implements OnChanges{

    @Input()
    rating !: number;
    starWidth?: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;

        
    }
  
}
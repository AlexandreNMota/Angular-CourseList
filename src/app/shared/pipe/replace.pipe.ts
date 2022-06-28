import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {
    transform(value: any, char: any, valueToReplace: any){
        return value.replace(char, valueToReplace);
    }

}
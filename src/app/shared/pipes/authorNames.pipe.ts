import { Pipe, PipeTransform } from "@angular/core";
import { CoursesService } from "@app/services/courses.service";
import { forkJoin, map, Observable } from 'rxjs';

@Pipe({
    name: 'authorNamePipe'
})
export class AuthorNamePipe implements PipeTransform {

    constructor(private coursesService: CoursesService) {}

    transform(ids: string[]): Observable<string[]> {
        const authorObservables = ids.map(id => 
          this.coursesService.getAuthorById(id).pipe(
            map(response => ' ' + response.result.name)
          )
        );
        return forkJoin(authorObservables);
    }
  }

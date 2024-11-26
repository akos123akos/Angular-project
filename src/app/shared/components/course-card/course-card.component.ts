import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '@app/services/courses.service';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() creationDate!: string;
  @Input() duration!: number;
  @Input() authors!: string[];
  @Input() editable: boolean = false;
  @Input() id!: any;

  @Output() clickOnShow = new EventEmitter<void>();

  constructor( private router: Router, private coursesService: CoursesService, private coursesFacade: CoursesStateFacade) {}

  showCourse(): void {
    this.clickOnShow.emit(this.id);
  }

  editCourse() {
    this.router.navigate([`/courses/edit/${this.id}`]);
  }

  deleteCourse() {
    if (confirm(`Are you sure you want to delete the course "${this.title}"?`)) {
      this.coursesFacade.deleteCourse(this.id);
      this.coursesFacade.courses$.subscribe((courses) => {
        const isDeleted = !courses.find((course) => course.id === this.id);
        if (isDeleted) {
          console.log(`Course "${this.title}" deleted successfully.`);
        }
      });
    }
  }
  
}

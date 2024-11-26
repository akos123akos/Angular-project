import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { UserStoreService } from '@app/user/services/user-store.service';
import { Router } from '@angular/router';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit{

  courses: any[] = []
  authors: any[] = []

  @Input() editable: boolean = false;
  noResult: boolean = false

  constructor( private coursesFacade: CoursesStateFacade, private coursesService: CoursesService, private userStoreService: UserStoreService, private router: Router) {}
  

  ngOnInit(): void {
    this.userStoreService.getUser();
    this.userStoreService.isAdmin$.subscribe((isAdmin) => {
      this.editable = isAdmin;
    });

    this.coursesFacade.allCourses$.subscribe(
      courses => {
        this.courses = courses;
    });

    this.coursesFacade.getAllCourses();
  }
  
  onSearch(value: string): void {
    this.coursesFacade.getFilteredCourses(value);
    this.coursesFacade.courses$.subscribe(courses => {
      this.noResult = courses.length === 0;
    });
  }

  navigateToCourse(courseId: any): void {
    this.router.navigate([`courses/${courseId}`]);
  }

  navigateToAddCourse() {
    this.router.navigate(['/courses/add']);
  }

}
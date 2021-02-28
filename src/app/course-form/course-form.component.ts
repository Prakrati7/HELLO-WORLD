import { CourseFormService } from './course-form.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor(service:CourseFormService) { 
    this.courses=service.getCourse();
    console.log(this.courses);
  }
  title = "Courses List Is:";
  id=1;
  name="kareena";
  courses;
  ngOnInit(): void {
  }

}

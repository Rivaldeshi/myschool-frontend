import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private router: Router) { }
  createStudent() {
    this.router.navigate(['/student']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/Student';
import { AuthService } from '../services/auth.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private studentService: StudentService) { }

  public Student: Student = {
    id: 0,
    name: '',
    age: 0,
    grade: '',
    email: ''
  };

  public StudentId: any = 0;


  ngOnInit(): void {

    this.StudentId = this.route.snapshot.paramMap.get("id");
    if (this.StudentId) {

      console.log(this.studentService.getStudentById(parseInt(this.StudentId)))
      this.Student = this.studentService.getStudentById(parseInt(this.StudentId))!;
    }

  }





  createStudent() {

    console.log(this.Student);

    if (this.StudentId && this.StudentId != 0) {
      this.Student.id = this.StudentId;
      this.studentService.updateStudent(this.Student)
    } else {

      this.studentService.addStudent(this.Student);
    }
    this.router.navigate(['/student']);
  }
}

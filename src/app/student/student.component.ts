import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  Students: any[] = [];

  constructor(private router: Router, private authService: AuthService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.Students = this.studentService.getStudents();
  }

  delete(id:any){
    console.log(id);
    this.studentService.deleteStudent(id);
    this.Students = this.studentService.getStudents();
  }

}

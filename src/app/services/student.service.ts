import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }


  students: Student[] = [{ id: 1, name: 'John Doe', email:'email@gmail.com', age: 20, grade: 'A' },
  { id: 2, name: 'Jane Smith', age: 22, grade: 'B', email:'email@gmail.com' },
  { id: 3, name: 'Michael Johnson', age: 21, grade: 'A+', email:'email@gmail.com' },
  { id: 4, name: 'Emily Williams', age: 19, grade: 'B-', email:'email@gmail.com' },
  { id: 5, name: 'James Brown', age: 23, grade: 'C', email:'email@gmail.com' }
  ];

  // Read operation - Get all students
  getStudents(): Student[] {
    return this.students;
  }

  // Read operation - Get a student by ID
  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  // Create operation - Add a new student
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Update operation - Update an existing student
  updateStudent(updatedStudent: Student): void {
    const index = this.students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  // Delete operation - Delete a student by ID
  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }
}

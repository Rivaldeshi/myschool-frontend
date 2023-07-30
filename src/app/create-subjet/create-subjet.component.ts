import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { StudentService } from '../services/student.service';
import { Subjet } from '../models/Subjet';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-create-subjet',
  templateUrl: './create-subjet.component.html',
  styleUrls: ['./create-subjet.component.css']
})
export class CreateSubjetComponent {

  constructor(private router: Router, private authService: AuthService, private subjetService: SubjectService) { }

  public Subjet: Subjet = {
    id: 0,
    name: '',
    description:'',
  };

  createSubjet() {

    console.log(this.Subjet);

    this.subjetService.addSubjet(this.Subjet);
    this.router.navigate(['/subjet']);
  }
}

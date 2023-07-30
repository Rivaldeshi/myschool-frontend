import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subjet',
  templateUrl: './subjet.component.html',
  styleUrls: ['./subjet.component.css']
})
export class SubjetComponent {
  Subjets: any[] = [];

  constructor(private router: Router, private authService: AuthService, private subjetService: SubjectService) { }

  ngOnInit(): void {
    this.Subjets = this.subjetService.getSubjets();
  }

}

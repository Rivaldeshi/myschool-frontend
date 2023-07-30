import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SubjetComponent } from './subjet/subjet.component';
import { StudentComponent } from './student/student.component';
import { EnrolmentComponent } from './enrolment/enrolment.component';
import { AccountComponent } from './account/account.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', component: DashbordComponent , canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashbord', component: DashbordComponent, canActivate:[AuthGuard] },
  { path: 'subjet', component: SubjetComponent },
  { path: 'student', component: StudentComponent },
  { path: 'enrolment', component: EnrolmentComponent },
  { path: 'account', component: AccountComponent },
  { path: 'create-student', component: CreateStudentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

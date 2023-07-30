import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SubjetComponent } from './subjet/subjet.component';
import { StudentComponent } from './student/student.component';
import { EnrolmentComponent } from './enrolment/enrolment.component';
import { AccountComponent } from './account/account.component';
import { CreateStudentComponent } from './create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    SidebarComponent,
    NavBarComponent,
    SubjetComponent,
    StudentComponent,
    EnrolmentComponent,
    AccountComponent,
    CreateStudentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

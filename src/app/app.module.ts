import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMITComponent } from './about-mit/about-mit.component';
import { StudentLifeComponent } from './student-life/student-life.component';
import { DepartmentComponent } from './department/department.component';
import { ProgramComponent } from './program/program.component';
import { BachelorComponent } from './program/bachelor/bachelor.component';
import { BusinessComponent } from './program/bachelor/business/business.component';
import { ComputerStudiesComponent } from './program/bachelor/computer-studies/computer-studies.component';
import { EnglishComponent } from './program/bachelor/english/english.component';
import { MusicComponent } from './program/bachelor/music/music.component';
import { ReligionComponent } from './program/bachelor/religion/religion.component';
import { SocialStudiesComponent } from './program/bachelor/social-studies/social-studies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HowToApplyComponent,
    FooterComponent,
    AboutMITComponent,
    StudentLifeComponent,
    DepartmentComponent,
    ProgramComponent,
    BachelorComponent,
    BusinessComponent,
    ComputerStudiesComponent,
    EnglishComponent,
    MusicComponent,
    ReligionComponent,
    SocialStudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

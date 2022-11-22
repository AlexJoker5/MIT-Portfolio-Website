import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutMITComponent } from './about-mit/about-mit.component';
import { AdmissionRequirementComponent } from './admission-requirement/admission-requirement.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentComponent } from './department/department.component';
import { DeveloperTeamComponent } from './developer-team/developer-team.component';
import { EntryRequirementComponent } from './entry-requirement/entry-requirement.component';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { HowToPayComponent } from './how-to-pay/how-to-pay.component';
import { NotAvailableComponent } from './not-available/not-available.component';
import { BachelorComponent } from './program/bachelor/bachelor.component';
import { LapComponent } from './program/lap/lap.component';
import { ProgramComponent } from './program/program.component';
import { StudentLifeComponent } from './student-life/student-life.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'how-to-apply',
    component:HowToApplyComponent
  },
  {
    path:'about-mit',
    component:AboutMITComponent
  },
  {
    path:'about-mit/developer-team',
    component:DeveloperTeamComponent
  },
  {
    path:'about-mit/contact-us',
    component:ContactUsComponent
  },
  {
    path:'student-life',
    component:StudentLifeComponent
  },
  {
    path:'program',
    component:ProgramComponent
  },
  {
    path:'department',
    component:DepartmentComponent
  },
  {
    path:'program/lap',
    component:LapComponent
  },
  {
    path:'program/lap/bachelor',
    component:BachelorComponent
  },
  {
    path:'how-to-apply/entry-requirement',
    component:EntryRequirementComponent
  },
  {
    path:'how-to-apply/how-to-pay',
    component:HowToPayComponent
  },
  {
    path:'how-to-apply/fee',
    component:FeeComponent
  },
  {
    path:'how-to-apply/admission-requirement',
    component:AdmissionRequirementComponent
  },
  {
    path: 'not-available',
    component: NotAvailableComponent
  }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

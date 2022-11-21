import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutMITComponent } from './about-mit/about-mit.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { HowToApplyComponent } from './how-to-apply/how-to-apply.component';
import { BachelorComponent } from './program/bachelor/bachelor.component';
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
    path:'lap/bachelor',
    component:BachelorComponent
  }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

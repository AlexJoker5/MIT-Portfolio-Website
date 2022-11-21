import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BusinessComponent } from './business/business.component';
import { ComputerStudiesComponent } from './computer-studies/computer-studies.component';
import { EnglishComponent } from './english/english.component';
import { MusicComponent } from './music/music.component';
import { ReligionComponent } from './religion/religion.component';
import { SocialStudiesComponent } from './social-studies/social-studies.component';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bachelor',
  templateUrl: './bachelor.component.html',
  styleUrls: ['./bachelor.component.css']
})
export class BachelorComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true})
  container!: ViewContainerRef

  majorComponent = BusinessComponent;

  constructor() { }

  ngOnInit(): void {
  }

  assignComponent(component: any) {
    if(component === 'business')
      this.majorComponent = BusinessComponent;
    else if(component === 'computerStudies')
      this.majorComponent = ComputerStudiesComponent;
    else if(component === 'english')
      this.majorComponent = EnglishComponent;
    else if(component === 'music')
      this.majorComponent = MusicComponent;
    else if(component === 'religion')
      this.majorComponent = ReligionComponent;
    else if(component === 'socialStudies')
      this.majorComponent = SocialStudiesComponent;
    
  }

}

import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-social-studies',
  templateUrl: './social-studies.component.html',
  styleUrls: ['./social-studies.component.css']
})
export class SocialStudiesComponent implements OnInit {

  faChevronDown = faChevronDown;
  
  constructor() { }

  ngOnInit(): void {
  }

}

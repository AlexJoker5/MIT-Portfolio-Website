import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-computer-studies',
  templateUrl: './computer-studies.component.html',
  styleUrls: ['./computer-studies.component.css']
})
export class ComputerStudiesComponent implements OnInit {

  faChevronDown = faChevronDown;
  
  constructor() { }

  ngOnInit(): void {
  }

}

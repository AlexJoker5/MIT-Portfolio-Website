import { Component, HostListener, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  constructor() { }
  ngOnInit() {
  }
  toggleMenu() 
  {
    this.isCollapsed = !this.isCollapsed;
  }

}


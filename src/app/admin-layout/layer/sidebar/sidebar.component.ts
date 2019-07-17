import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  DisplayMenu: string;
  SidebarClass: string;

  constructor() { }

  ngOnInit() {
    this.DisplayMenu = '';
    this.SidebarClass = 'sidebar-right';
  }
  expandMenu(element: any) {
    if (element === this.DisplayMenu) {
        this.DisplayMenu = '0';
    } else {
        this.DisplayMenu = element;
    }
}

toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.SidebarClass);
}
}

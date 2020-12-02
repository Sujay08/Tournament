import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/fifa', title: 'FIFA',  icon: 'pe-7s-graph', class: '' },
    { path: '/nba', title: 'NBA',  icon: 'pe-7s-graph', class: '' },
    { path: '/profiles', title: 'Profiles',  icon: 'pe-7s-graph', class: '' },
    { path: '/fixtures', title: 'Fixtures',  icon:'pe-7s-rocket', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

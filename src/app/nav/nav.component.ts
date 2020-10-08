import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  routeList: Route[] = [
    {path: "/", display: "Home", title: "Home"},
    {path: "Ships/", display: "Ships", title: "View"},
    {path: "/ShipMaker", display: "ShipMaker", title: "Design"},
    {path: "/About", display: "About", title: "Info"}
  ];
}

interface Route {
  title: string;
  path: string;
  display: string;
}

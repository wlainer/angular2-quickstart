import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>  
      <a routerLinkActive="active" routerLink="/dashboard">Dashboard</a>
      <a routerLinkActive="active" routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>    
  `
})

export class AppComponent {
  title = "Tour of Heroes";
}
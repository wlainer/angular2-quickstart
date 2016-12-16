import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId   : module.id,
  selector   : 'my-dashboard',  
  styleUrls  : ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
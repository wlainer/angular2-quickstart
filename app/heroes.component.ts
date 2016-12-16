import { HeroService } from './hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  moduleId   : module.id,
  selector   : 'my-heroes',
  styleUrls  : ['heroes.component.css'],
  templateUrl: 'heroes.component.html'
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

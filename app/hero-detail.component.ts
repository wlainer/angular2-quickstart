import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId   : module.id,
  selector   : 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls  : ['heroes.component.css']
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input()
  hero: Hero;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) =>
        this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { HeroSearchService } from './hero-search.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';


@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() { 
    this.heroes = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
      ? this.heroSearchService.search(term)
      : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      })
  }

  gotoDetail(hero: Hero): void {
    let link = ['detail', hero.id];
    this.router.navigate(link);
  }
}

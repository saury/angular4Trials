import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heros';
  onSelect = (hero: Hero) => (this.currentHero = hero);
  heroes: Hero[];
  currentHero: Hero;
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then((data) => {
      this.heroes = data
    });
  }
  ngOnInit() {
    this.getHeroes()
  }
}
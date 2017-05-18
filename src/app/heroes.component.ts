import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'widget-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService,
        private router: Router) { }
    onSelect = (hero: Hero) => (this.currentHero = hero);
    heroes: Hero[];
    currentHero: Hero;
    getHeroes(): void {
        this.heroService.getHeroes().then((data) => {
            this.heroes = data
        });
    }
    ngOnInit() {
        this.getHeroes()
    }
    gotoDetail(id: string) {
        this.router.navigate(['/detail', id]);
    }
}
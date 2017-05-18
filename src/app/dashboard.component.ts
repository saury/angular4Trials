import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']

})

export class DashboardComponent implements OnInit {
    constructor(private heroService: HeroService) { }
    heroes: Hero[];
    getHeroes(): void {
        this.heroService.getHeroes().then((data) => {
            this.heroes = data.slice(0, 4);
        });
    }
    ngOnInit() {
        this.getHeroes()
    }
}
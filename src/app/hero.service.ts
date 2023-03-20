import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messsageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messsageService.add('HeroService: fetched heroes');
    return heroes;
  }
}

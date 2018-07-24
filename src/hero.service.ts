import { Observable, of } from 'rxjs';
import { inject, injectable } from 'inversify';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@injectable()
export class HeroService {

  constructor() {
      // Constructor
  }

  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

import { injectable } from 'inversify';
import { Observable, of } from 'rxjs';
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

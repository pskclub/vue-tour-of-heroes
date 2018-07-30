import { injectable, inject } from 'inversify';
import SERVICES from '../di/services';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MockHeroes } from './mock-heroes';

@injectable()
export class HeroService {

  constructor(@inject(SERVICES.MockHeroes) private mockHeroes: MockHeroes) {
    // Constructor
  }

  public getHeroes(): Observable<Hero[]> {
    return of(this.mockHeroes.getMockHeroes());
  }
}

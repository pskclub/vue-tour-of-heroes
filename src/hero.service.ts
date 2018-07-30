import { injectable, inject } from 'inversify';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HttpClient } from '@/http-client';
import SERVICES from '@/services';

@injectable()
export class HeroService {

  constructor(@inject(SERVICES.HttpClient) private httpClient: HttpClient) {
    // Constructor
  }

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.getHeroes();
  }
}

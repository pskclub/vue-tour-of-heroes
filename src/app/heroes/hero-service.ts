import { inject, injectable } from 'inversify'
import SERVICES from '@/app/di/services'
import { Observable, of } from 'rxjs'
import { Hero } from '@/app/heroes/types'
import { MockHeroes } from '@/app/heroes/mock-heroes'

@injectable()
export class HeroService {

  constructor (@inject(SERVICES.MockHeroes) private mockHeroes: MockHeroes) {
    // Constructor
  }

  public getHeroes (): Observable<Hero[]> {
    return of(this.mockHeroes.getMockHeroes())
  }
}

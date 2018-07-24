import { Container } from 'inversify';
import 'reflect-metadata';
import SERVICE_IDENTIFIER from './identifiers';
import { HeroService } from './hero.service';

const container: Container = new Container();

container.bind<HeroService>(SERVICE_IDENTIFIER.HERO_SERVICE).to(HeroService);

export default container;

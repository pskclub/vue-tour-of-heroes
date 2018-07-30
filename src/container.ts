import { Container } from 'inversify';
import SERVICES from './services';
import getDecorators from 'inversify-inject-decorators';
import { HeroService } from './hero.service';
import { HttpClient } from '@/http-client';

const container = new Container();
container.bind<HttpClient>(SERVICES.HttpClient).to(HttpClient);
container.bind<HeroService>(SERVICES.HeroService).to(HeroService);

const { lazyInject } = getDecorators(container);

export { container, lazyInject };

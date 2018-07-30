import { Container } from 'inversify';
import { HeroService } from './hero.service';
import SERVICES from './services';
import getDecorators from 'inversify-inject-decorators';

const container = new Container();
container.bind<HeroService>(SERVICES.HeroService).to(HeroService);

const { lazyInject } = getDecorators(container);

export { container, lazyInject };

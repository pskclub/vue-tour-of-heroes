import { Container } from 'inversify';
import SERVICES from '@/app/di/services';
import getDecorators from 'inversify-inject-decorators';
import { HeroService } from '@/app/heroes/hero-service';
import { MockHeroes } from '@/app/heroes/mock-heroes';

const container = new Container();
container.bind<MockHeroes>(SERVICES.MockHeroes).to(MockHeroes);
container.bind<HeroService>(SERVICES.HeroService).to(HeroService);

const { lazyInject } = getDecorators(container);

export { container, lazyInject };

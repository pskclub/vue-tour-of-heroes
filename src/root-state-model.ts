import { HeroStateModel } from './app/heroes/types'
import { AboutStateModel } from './app/about/types'

export default interface RootStateModel {
  heroState?: HeroStateModel
  AboutState?: AboutStateModel
}

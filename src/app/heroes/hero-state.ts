import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { HeroStateModel } from './types'
import RootStateModel from '../../root-state-model'

const state: HeroStateModel = {
  heroes: []
}

const getters: GetterTree<HeroStateModel, RootStateModel> = {
  allHeroes: s => s.heroes.slice()
}

const mutations: MutationTree<HeroStateModel> = {
  _loadHeroes (s) {
    s.heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]
  },
  _saveHero (s, newHero) {
    s.heroes = s.heroes.map(hero =>  hero.id === newHero.id ? newHero : hero)
  }
}

const actions: ActionTree<HeroStateModel, RootStateModel> = {
  loadHeroes (s) {
    s.commit('_loadHeroes')
  },
  saveHero (s, newHero) {
    s.commit('_saveHero', newHero)
  }
}

export const heroState: Module<HeroStateModel, RootStateModel> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}

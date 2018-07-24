<template>
<div>
    <h2>{{hero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
    <label>name:
        <input v-model="hero.name" placeholder="name">
    </label>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Hero } from '../hero';

@Component
export default class HeroesComponent extends Vue {
  private hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() {
      super();
  }

  private created() {
      // console.log('created');
  }
}
</script>

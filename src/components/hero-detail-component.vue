<template>
<div v-if="hero">
  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label>name:
      <input v-model="hero.name" placeholder="name"/>
    </label>
  </div>
</div>    
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Hero } from '../hero';

@Component
export default class HeroDetailComponent extends Vue {
  @Prop({
    type: Object,
  })
  private hero?: Hero;

  constructor() {
    super();
  }
}
</script>
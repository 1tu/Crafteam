<template lang="pug">
  section страница товара {{ $route.params.name }}
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component({})
export default class extends Vue {
  public created(): void {}
}
</script>

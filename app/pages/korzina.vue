<template lang="pug">
div
  PageHeader(:breadcrumbs='breadcrumbs')
  section корзина
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../components/PageHeader.vue';

@Component({ components: { PageHeader } })
export default class extends Vue {
  async asyncData() {
    const breadcrumbs = [{ name: 'Корзина', link: null }];

    return { breadcrumbs };
  }
}
</script>

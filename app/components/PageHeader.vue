<template lang="pug">
section.breadcrumb__container
  .container
    .anchor
      a(href="/korzina", title="Cart") Корзина
    .breadcrumb
      nuxt-link.breadcrumb__link(v-if='breadcrumbs.length' to='/') Главная
      span.breadcrumb__text(v-else) Главная
      span.breadcrumb__delimetr(v-if='breadcrumbs.length') >

      template(v-for='(item, index) in breadcrumbs')
        nuxt-link.breadcrumb__link(v-if='item.link' :to='item.link') {{ item.name }}
        span.breadcrumb__text(v-else) {{ item.name }}
        span.breadcrumb__delimetr(v-if='index < breadcrumbs.length - 1') >
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';

@Component()
export default class extends Vue {
  @Prop({ default: () => [] })
  public breadcrumbs: any[];
}
</script>

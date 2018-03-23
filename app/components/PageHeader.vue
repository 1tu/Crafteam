<template lang="pug">
  .container
    .cart
      span Корзина
    .breadcrumbs
      template(v-for='(item, index) in breadcrumbs')
        nuxt-link.breadcrumbs__link(v-if='item.link' :to='item.link') {{ item.name }}
        span.breadcrumbs__text(v-if='!item.link') {{ item.name }}
        span(v-if='index < breadcrumbs.length - 1') >
    
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

<style lang="scss" scoped>
.container {
  background-color: #f1f1f1;
}
.breadcrumbs {
  &__link {
    color: blue;
  }
}
.cart {
  float: right;
}
</style>
<template lang='pug'>
  .container
    .settings
      .settings__item
        .settings__name Сортировка
        select.settings__select(v-model='sortBy')
          option(value='price') По цене
      
      .settings__item
        .settings__name Показывать по
        select.settings__select(v-model='displayCount')
          option(value='10') 10
          option(value='25') 25
    
    ProductCard(v-for='item in $store.state.Product.list' :data='item' :key='item.id')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import ProductCard from '../components/ProductCard.vue';

@Component({ components: { ProductCard } })
export default class extends Vue {
  public sortBy = 'price';
  public displayCount = 10;

  public created() {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
.container {
  display: block;
}
.settings {
  border-radius: 10px;
  background-color: $color-grey-light;
  padding: 8px;

  &__item {
    display: inline-block;
    margin-right: 16px;
  }

  &__name {
    display: inline;
    color: $color-black;
    font-size: 14px;
    margin-right: 8px;
  }

  &__select {
    width: 100px;
  }
}
</style>

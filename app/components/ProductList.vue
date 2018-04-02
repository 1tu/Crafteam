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
      
      .settings__item
        .settings__view
          .settings__name Вид каталога
            img(src='~assets/images/katalog/cell-icon.png')
            img(src='~assets/images/katalog/stroke-icon.png')
      
      .settings__item
        .settings__compare
          img(src='~assets/images/katalog/compare-c.png')
          .settings__name Сравнение
            span='(' + '2' + ')'            

    
    p(v-if='$store.state.Product.isListLoading') Загрузка... 
    ProductCard(v-for='item in $store.state.Product.list' :data='item' :key='item.id')
    .pagination
      button.btn__more Еще товары
      .pagination__prev
        nuxt-link(to='/')
      .pagination__list
        
        ul
          li 
            nuxt-link(to='/') 1
          li 
            nuxt-link(to='/') 2
          li 
            nuxt-link(to='/') 3
          li 
            nuxt-link(to='/') 4
          li 
            nuxt-link(to='/') 5
          li ...
          li 
            nuxt-link(to='/') 48
      .pagination__next
        nuxt-link(to='/')
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
@import '~assets/css/components/productList.scss';
</style>

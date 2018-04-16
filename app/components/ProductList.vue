<template lang='pug'>
  div
    .settings
      .settings__item
        span.settings__name Сортировка
        select.settings__select(v-model='sortBy')
          option(value='price') По цене

      .settings__item
        span.settings__name Показывать по
        select.settings__select(v-model='filters.perPage')
          option(value='12') 12
          option(value='24') 24
          option(value='36') 36

      .settings__item
        span.settings__name Вид каталога
        img(src='~assets/images/katalog/cell-icon.png')
        img.ml-3(src='~assets/images/katalog/stroke-icon.png')

      //- .settings__item
      //-   .settings__compare
      //-     img(src='~assets/images/katalog/compare-c.png')
      //-     .settings__name Сравнение
      //-       span='(' + '2' + ')'

    p(v-if='$store.state.Product.isListLoading') Загрузка...
    Pagination(:max='$store.getters["Product/pageCount"](filters.perPage)' :current='filters.page' :url='url')

    .product-list
      .product-list__item(v-for='item in $store.getters["Product/listByPage"](filters.page, filters.perPage)' :key='item.id')
        ProductCard(:data='item')

    Pagination(:max='$store.getters["Product/pageCount"](filters.perPage)' :current='filters.page' :url='url')
</template>

<script lang="ts">
import Vue from 'vue';
import qs from 'query-string';
import Component from 'nuxt-class-component';
import ProductCard from './ProductCard.vue';
import Pagination from './Pagination.vue';

import { Prop, Watch } from 'vue-property-decorator';
import { CatalogFilters } from '../shared/types/category.entity';
import { makeUrl } from '../shared/helpers/location.helper';

@Component({ components: { ProductCard, Pagination } })
export default class extends Vue {
  @Prop() public filters: CatalogFilters;

  public sortBy = 'price';
  public url;

  public created() {
    this.url = this._getUrl();
  }

  @Watch('$route.query')
  private _onChangeQuery() {
    this.filters.page = parseInt(this.$route.query.page) || 1;
    this.filters.perPage = parseInt(this.$route.query.perPage) || this.filters.perPage;
    this.url = this._getUrl();
  }

  @Watch('filters.perPage')
  private _onChangePerPage() {
    this.$router.push(makeUrl(this.$route, { replaceQuery: { perPage: this.filters.perPage, page: 1 } }));
  }

  private _getUrl() {
    return makeUrl(this.$route, { replaceQuery: { page: undefined } });
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_util.scss';
@import '~assets/css/components/productList.scss';
</style>

<template lang="pug">
  .container.clearfix
    PageHeader(:breadcrumbs='breadcrumbs')
    main.main
      aside.filter
        .person_order.container
          p Не нашли подходящий вариант?
          button.btn Индивидуальный заказ
        ProductFilter(:filters='filters')
        .share.container
          h3 Акция!
          img(src='~assets/images/katalog/katalog-share.jpg')
          p При сумме заказа от 4500 руб. доставка бесплатно

      .body 
        .body__header
          h1.title {{ $store.getters.tText($store.state.Category.item.seoList[0].seoTemplate.h1, $store.state.Category.item.seoList[0].seoMeta) }}
          .editor(v-html='$store.getters.tText($store.state.Category.item.seoList[0].seoTemplate.content, $store.state.Category.item.seoList[0].seoMeta)')
          .body__header_filter
            p Таблички для: 
              nuxt-link(to='/') для офиса,
              nuxt-link(to='/') школа,
              nuxt-link(to='/') госучереждения,
              nuxt-link(to='/') больница,
            p По назначению: 
              nuxt-link(to='/') номер кабинета,
              nuxt-link(to='/') туалет,
              nuxt-link(to='/') служебное помещение,
        ProductList
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../../../components/PageHeader.vue';
import ProductFilter from '../../../components/ProductFilter.vue';
import ProductList from '../../../components/ProductList.vue';

import { Context } from '../../../typings/nuxt';
import { breadcrumbsBase } from '../../../shared/data/router.data';
import { makePath } from '../../../shared/helpers/location.helper';
import { filtersFromQuery } from '../../../shared/helpers/filters.helper';

@Component({
  components: { PageHeader, ProductFilter, ProductList }
})
export default class extends Vue {
  public filters;

  async asyncData(ctx: Context) {
    const path = makePath(ctx.route.fullPath);
    const baseCategoryName = path[path.length - 1];
    const baseCategoryId = ctx.store.getters['Category/idByNameTranslit'](baseCategoryName);
    const breadcrumbs = breadcrumbsBase.slice().concat([{ name: 'Каталог', link: null }, { name: baseCategoryName, link: null }]);
    const filters = filtersFromQuery(ctx.route.query as any);

    await Promise.all([
      ctx.store.dispatch('Category/getListByBase', baseCategoryId),
      ctx.store.dispatch('Category/getItemByName', baseCategoryName),
      ctx.store.dispatch('FilteredPage/getListByCategoryId', baseCategoryId),
      ctx.store.dispatch('Product/getListByFilter', filters)
    ]);
    return { breadcrumbs, filters };
  }

  head() {
    return {
      ...this.$store.getters['Category/head']
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
@import '~assets/css/components/katalog/main.scss';
</style>
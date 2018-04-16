<template lang="pug">
  div
    PageHeader(:breadcrumbs='breadcrumbs')
    .container.clearfix
      aside.filter
        //- .person
        //-   p Не нашли подходящий вариант?
        //-   button.btn Индивидуальный заказ

        ProductFilter(:filters='filters')

        //- .share
        //-   h4 Акция!
        //-   img(src='~assets/images/katalog/katalog-share.jpg')
        //-   p При сумме заказа от 4500 руб. доставка бесплатно

      main.body
        .body__header
          h1.body__title {{ $store.getters.tText($store.state.Category.item.seoList[0].seoTemplate.h1, $store.state.Category.item.seoList[0].seoMeta) }}
          .body__content.editor(v-html='$store.getters.tText($store.state.Category.item.seoList[0].seoTemplate.content, $store.state.Category.item.seoList[0].seoMeta)')

        .body__pages
          p.body__pages-row Таблички для:
            nuxt-link(to='/') офиса,
            nuxt-link(to='/') школ,
            nuxt-link(to='/') госучереждения,
            nuxt-link(to='/') больниц
          p.body__pages-row По назначению:
            nuxt-link(to='/') номер кабинета,
            nuxt-link(to='/') туалет,
            nuxt-link(to='/') служебное помещение

        ProductList(:filters='filters')
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../../../components/PageHeader.vue';
import ProductFilter from '../../../components/ProductFilter.vue';
import ProductList from '../../../components/ProductList.vue';

import { Context } from '../../../typings/nuxt';
import { makeSplitPath } from '../../../shared/helpers/location.helper';
import { filtersFromQuery } from '../../../shared/helpers/filters.helper';

@Component({
  components: { PageHeader, ProductFilter, ProductList }
})
export default class extends Vue {
  public filters;

  async asyncData(ctx: Context) {
    const path = makeSplitPath(ctx.route.fullPath);
    const baseCategoryName = path[path.length - 1];
    const baseCategoryId = ctx.store.getters['Category/idByNameTranslit'](baseCategoryName);
    const filters = filtersFromQuery(ctx.route.query as any);

    await Promise.all([
      ctx.store.dispatch('Category/getItemByName', baseCategoryName),
      ctx.store.dispatch('Category/getListByBase', baseCategoryId),
      ctx.store.dispatch('FilteredPage/getListByCategoryId', baseCategoryId),
      ctx.store.dispatch('Product/getListByFilter', filters)
    ]);

    const breadcrumbs = [{ name: 'Каталог', link: null }, { name: ctx.store.getters['Category/base'].name, link: null }];
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
@import '~assets/css/pages/katalog.scss';
</style>

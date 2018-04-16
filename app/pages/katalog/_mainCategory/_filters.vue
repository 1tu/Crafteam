<template lang="pug">
  div
    PageHeader(:breadcrumbs='breadcrumbs')
    .container.clearfix
      main.main
        ProductFilter.filter(:filters='filters')
        .body
          h1.title {{ $store.getters.tText($store.state.FilteredPage.item.seoTemplate.h1, $store.state.FilteredPage.item.seoMeta) }}
          .editor(v-html='$store.getters.tText($store.state.FilteredPage.item.seoTemplate.content, $store.state.FilteredPage.item.seoMeta)')
          ProductList(:filters='filters')
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../../../components/PageHeader.vue';
import ProductFilter from '../../../components/ProductFilter.vue';
import ProductList from '../../../components/ProductList.vue';

import { Context } from '../../../typings/nuxt';
import { filtersFromQuery } from '../../../shared/helpers/filters.helper';

@Component({
  components: { PageHeader, ProductFilter, ProductList }
})
export default class extends Vue {
  async asyncData(ctx: Context) {
    const route = ctx.route.fullPath.slice(1).split('/');
    const baseCategoryName = route[route.length - 2];
    const baseCategoryId = ctx.store.getters['Category/idByNameTranslit'](baseCategoryName);

    await ctx.store.dispatch('FilteredPage/getItemByUrl', '/' + route.slice(1).join('/'));
    if (!ctx.store.state.FilteredPage.item) {
      return ctx.error({ statusCode: 404, message: 'Page not found`' });
    }
    const filters = { ...filtersFromQuery(ctx.route.query as any), ...ctx.store.state.FilteredPage.item.filters };

    await Promise.all([
      ctx.store.dispatch('Category/getListByBase', baseCategoryId),
      ctx.store.dispatch('Product/getListByFilter', ctx.store.state.FilteredPage.item.filters)
    ]);
    const breadcrumbs = [
      { name: 'Каталог', link: null },
      { name: ctx.store.getters['Category/base'].name, link: '/katalog/' + ctx.store.getters['Category/base'].nameTranslit },
      { name: ctx.store.state.FilteredPage.item.name, link: null }
    ];

    return { breadcrumbs, filters };
  }

  head() {
    return {
      ...this.$store.getters['FilteredPage/head']
    };
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
@import '~assets/css/pages/katalog.scss';
</style>

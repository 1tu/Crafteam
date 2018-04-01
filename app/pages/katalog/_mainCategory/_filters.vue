<template lang="pug">
  .container.clearfix
    PageHeader(:breadcrumbs='breadcrumbs')
    main.main
      ProductFilter.filter(:filters='filters')
      .body 
        h1.title {{ $store.getters.tText($store.state.FilteredPage.item.seoTemplate.h1, $store.state.FilteredPage.item.seoMeta) }}
        .editor(v-html='$store.getters.tText($store.state.FilteredPage.item.seoTemplate.content, $store.state.FilteredPage.item.seoMeta)')
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
import { filtersFromQuery } from '../../../shared/helpers/filters.helper';

@Component({
  components: { PageHeader, ProductFilter, ProductList }
})
export default class extends Vue {
  async asyncData(ctx: Context) {
    const route = ctx.route.fullPath.slice(1).split('/');
    const baseCategoryName = route[route.length - 2];
    const baseCategoryId = ctx.store.getters['Category/idByNameTranslit'](baseCategoryName);
    const breadcrumbs = breadcrumbsBase.slice().concat([{ name: 'Каталог', link: null }, { name: baseCategoryName, link: null }]);

    await ctx.store.dispatch('FilteredPage/getItemByUrl', '/' + route.slice(1).join('/'));
    if (!ctx.store.state.FilteredPage.item) {
      return ctx.error({ statusCode: 404, message: 'Page not found`' });
    }

    await Promise.all([
      ctx.store.dispatch('Category/getListByBase', baseCategoryId),
      ctx.store.dispatch('Product/getListByFilter', ctx.store.state.FilteredPage.item.filters)
    ]);
    return { breadcrumbs, filters: ctx.store.state.FilteredPage.item.filters };
  }

  head() {
    return {
      ...this.$store.getters['FilteredPage/head']
    };
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1200px;
}
.main {
  padding: 60px 0;
}
.filter {
  float: left;
  width: 250px;
}
.body {
  padding-left: 280px;
}
.title {
  color: #666666;
  font-size: 24px;
}
.description {
  color: #a9a9a9;
  font-size: 14px;
}
</style>
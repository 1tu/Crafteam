<template lang="pug">
  .container.clearfix
    PageHeader(:breadcrumbs='breadcrumbs')
    main.main
      ProductFilter.filter
      .body 
        h1.title {{ $store.getters.tText($store.state.Category.item.seoList[0].seoTemplate.h1, $store.state.Category.item.seoList[0].seoMeta) }}
        .editor(v-html='$store.getters.tText($store.state.Category.item.seoList[0].seoTemplate.content, $store.state.Category.item.seoList[0].seoMeta)')
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

@Component({
  components: { PageHeader, ProductFilter, ProductList }
})
export default class extends Vue {
  async asyncData(ctx: Context) {
    const route = ctx.route.fullPath.slice(1).split('/');
    const baseCategoryName = route[route.length - 1];
    const baseCategoryId = ctx.store.getters['Category/idByNameTranslit'](baseCategoryName);
    const breadcrumbs = breadcrumbsBase.slice().concat([{ name: 'Каталог', link: null }, { name: baseCategoryName, link: null }]);

    await Promise.all([
      ctx.store.dispatch('Category/getListByBase', baseCategoryId),
      ctx.store.dispatch('Category/getItemByName', baseCategoryName),
      ctx.store.dispatch('FilteredPage/getListByCategoryId', baseCategoryId)
    ]);
    return { breadcrumbs };
  }

  head() {
    return {
      ...this.$store.getters['Category/head']
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
<template lang="pug">
  section 
    PageHeader(:breadcrumbs='breadcrumbs')
    div katalog. главная категория без фильтров {{ Object.keys($route) }}
    div {{  $store.state.shop }}
    hr
    div {{ $store.state.Category.listBase }}
    hr
    div {{ $store.state.city }}
    hr
    div {{ $store.state.Category.list }}
    hr
    div {{ $store.state.FilteredPage.list }}
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import axios from 'axios';
import PageHeader from '../../../components/PageHeader.vue';

import { Context } from '../../../typings/nuxt';
import { urlMap, breadcrumbsBase } from '../../../shared/data/router.data';
import { RootState } from '../../../store/root.store';
import { CategoryAction } from '../../../store/modules/category';
import { FilteredPageAction } from '../../../store/modules/filteredPage';

@Component({
  components: { PageHeader }
})
export default class extends Vue {
  @CategoryAction getListByBase;
  @CategoryAction getPropList;
  @FilteredPageAction getListByCategoryId;

  async asyncData(ctx: Context) {
    const route = ctx.route.fullPath.slice(1).split('/');
    const baseCategoryName = route[route.length - 1];
    const baseCategoryId = ctx.store.getters['Category/idByNameTranslit'](baseCategoryName);
    const breadcrumbs = breadcrumbsBase.slice().concat([{ name: 'Каталог', link: null }, { name: baseCategoryName, link: null }]);
    console.log(baseCategoryName, baseCategoryId, ctx.store.state.Category.listBase);

    await Promise.all([ctx.store.dispatch('Category/getListByBase', baseCategoryId), ctx.store.dispatch('FilteredPage/getListByCategoryId', baseCategoryId)]);
    return { breadcrumbs };
  }

  public created() {
    //
  }
}
</script>

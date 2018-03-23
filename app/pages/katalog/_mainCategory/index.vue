<template lang="pug">
  section 
    PageHeader(:breadcrumbs='breadcrumbs')
    div katalog. главная категория без фильтров {{ Object.keys($route) }}
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../../../components/PageHeader.vue';
import { Context } from '../../../typings/nuxt';
import { urlMap, breadcrumbsBase } from '../../../shared/data/router.data';
import axios from 'axios';

@Component({
  components: { PageHeader }
})
export default class extends Vue {
  async asyncData(ctx: Context) {
    const route = ctx.route.fullPath.slice(1).split('/');
    const breadcrumbs = breadcrumbsBase.slice().concat([{ name: 'Каталог', link: null }, { name: route[route.length - 1], link: null }]);

    return { breadcrumbs };
  }

  public created() {}
}
</script>

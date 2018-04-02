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
        .body__footer
          .content.clearfix
            h2 Заголовок текста
            p Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.
            ul
              li Сайт рыбатекст поможет
              li Сайт рыбатекст поможет
              li Сайт рыбатекст поможет
              li Сайт рыбатекст поможет
            iframe(height="315" src="https://www.youtube.com/embed/jOHmLeAXETU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)
    .callback
      h2 Оставьте заявку, и мы рассчитаем стоимость работ
      form.form__call
          input(type="hidden" name="nameButton" value="Блок Footer")
          input(type="text" name="name" placeholder="Ваше имя" required)
          input(type="text" name="phone" placeholder="Ваш номер телефона" required)
          button.btn Оставить заявку
          label#process.process
              input.required(type="checkbox" name="process" for="process")
              .checked
              .checked-text Даю согласие на обработку персональных данных
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
@import '~assets/css/components/index/callback.scss';
</style>
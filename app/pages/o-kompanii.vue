<template lang="pug">
div
  PageHeader(:breadcrumbs='breadcrumbs')
  section.container
    h1 О компании
    p Компания Krafteam.com существует с 2014 года. Мы специализируемся на изготовлении и прожаэе наружной рекламы, адресных табличек, информационных стендов, светодиодных бегущих строки, уличных светодиодных экранов, модульных картин и прочей продукции. Так же мы реализуем комплектующие для изготовления рекламы и стендов, оптом и в розницу. Интернет магазин KrafTeam.com доставит Ваш заказ <в город> до ближайшего пункта выдачи или курьером «до двери». 
    p.mt-4 С информацией о доставке можете ознакомиться <nuxt-link to='/dostavka'>здесь</nuxt-link> 
    p.mt-4 С информацией о способах оплаты можете ознакомиться <nuxt-link to='/oplata'>здесь</nuxt-link>

</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../components/PageHeader.vue';

@Component({ components: { PageHeader } })
export default class extends Vue {
  async asyncData() {
    const breadcrumbs = [{ name: 'О компании', link: null }];

    return { breadcrumbs };
  }
}
</script>

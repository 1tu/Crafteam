<template lang="pug">
div
  PageHeader(:breadcrumbs='breadcrumbs')
  section.container
    h1 Способы доставки
    p Доставка заказов из интернета магазина KrafTeam.com <в город> осуществляется транспортными компаниями CDEK, DPD, ПЭК, Деловые линии и «Почтой России».
    h3 Возможные следующие варианты доставки:
    h4 Курьерская доставка до двери <в городе>
    p Выберите этот вариант и заказ будет доставлен прямо до двери. Курьер предварительно свяжется с Вами, уточните наиболее удобное время и место для получения заказа.
    h4 Самовывоз с пункта выдачи
    p При оформлении заказа, выберите наиболее удобный пункт выдачи, и мы доставим Ваш заказ по указанному адресу.
    p В любом из вариантов, Вы сможете оформить Ваш заказ, проверить посылку и только после этого принять, и оплатить посылку, если выбрали оплату наложенным платежом.
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../components/PageHeader.vue';

@Component({ components: { PageHeader } })
export default class extends Vue {
  async asyncData() {
    const breadcrumbs = [{ name: 'Доставка', link: null }];

    return { breadcrumbs };
  }
}
</script>

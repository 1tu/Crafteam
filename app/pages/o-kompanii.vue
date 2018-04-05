<template lang="pug">
  section.container 
    h1 О компании
    p Компания Krafteam.com существует с 2014 года. Мы специализируемся на изготовлении и прожаэе наружной рекламы, адресных табличек, информационных стендов, светодиодных бегущих строки, уличных светодиодных экранов, модульных картин и прочей продукции. Так же мы реализуем комплектующие для изготовления рекламы и стендов, оптом и в розницу. Интернет магазин KrafTeam.com доставит Ваш заказ <в город> до ближайшего пункта выдачи или курьером «до двери». 
    p С информацией о доставке можете ознакомиться <nuxt-link to='/dostavka'>здесь</nuxt-link> 
    p С информацией о способах оплаты можете ознакомиться <nuxt-link to='/oplata'>здесь</nuxt-link>

</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component()
export default class extends Vue {
  public created(): void {}
}
</script>

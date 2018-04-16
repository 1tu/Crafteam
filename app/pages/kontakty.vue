<template lang="pug">
div
  PageHeader(:breadcrumbs='breadcrumbs')
  section.contacts
    .container
      h1 Контактная информация 
      p По любым вопросам Вы можете связаться с нами любым удобным способом: Позвонить по бесплатному федеральному номеру ХХХХХХХХХ, отправить Ваш запрос или заявку на e-mail, написав в мессенджер watsapp, viber или telegram.
      p Отследить текущий статус заказа Вы сможете по номер телефона, который указали при оформлении.
      p Есть вопросы? Звоните!
      h3 График работы:
      ul.list
        li.ml-4  Принимаем заказы 24/7/365. Выбрать товар и оформить заказ, Вы можете в любое удобное время.
        li.ml-4  Мы проконсультируем Вас и оформим заказ по телефону с 9:00 до 19:00 (мск), кроме выходных и праздничных дней.
        li.ml-4  Доставка заказов – с 9:00 до 21:00, с понедельника по субботу.
      p Адрес пунктов выдачи <в городе>: *карта с перечнем адресов* 
      h3 Юридические реквизиты:
      ul.list
        li.ml-4 ИП Хализов А.С.
        li.ml-4 ИНН 260806481409
        li.ml-4 ОГРН 315265100027855
        li.ml-4 р/с 40802810200000153158
        li.ml-4 АО "Тинкофф Банк" 044525974
      h3 Наши телефоны
      p Тел.:
        a(href="tel:88043337060", title="88043337060")  8 (804) 333-70-60,
        a(href="tel:84953000000", title="84953000000")  8 (495) 300-00-00
      h5 Электронная почта
      p.social__e-mail E-mail: manager@krafteam.com
      h3 Режим работы
      p Время работы
      p Пн-сб: 07:00-21:00
      p Выходной - Вс.


</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../components/PageHeader.vue';

@Component({ components: { PageHeader } })
export default class extends Vue {
  async asyncData() {
    const breadcrumbs = [{ name: 'Контакты', link: null }];

    return { breadcrumbs };
  }
}
</script>

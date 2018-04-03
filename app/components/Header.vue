<template lang="pug">
  header.header
    nav.info-nav
      .info-nav-wr.container
        ul.info-menu.row
          li.info-menu-el.col-md-2
            nuxt-link(to='/nashi-klienty') Наши клиенты
            //- img(src='~/assets/images/infoMenu/nashi-klienty.png')
          li.info-menu-el.col-md-2
            nuxt-link(to='/o-kompanii') О компании
            //- img(src='/assets/images/infoMenu/o-kompanii.png')
          li.info-menu-el.col-md-2
            nuxt-link(to='/oplata') Оплата
            //- img(src='~assets/images/infoMenu/oplata.png')
          li.info-menu-el.col-md-2
            nuxt-link(to='/dostavka') Доставка
            //- img(src='~assets/images/infoMenu/dostavka.png')
          li.info-menu-el.col-md-2
            nuxt-link(to='/punkty-samovyvoza') Пункты самовывоза
            //- img(src='~assets/images/infoMenu/punkty-samovyvoza.png')
          li.info-menu-el.col-md-2
            nuxt-link(to='/avtorizatsiya') Авторизация
            //- img(src='~assets/images/infoMenu/avtorizatsiya.png')

    .info.container
      .row
        .logo.col-md-2.col-sm-3.col-xs-6
          nuxt-link(to='/') Krafteam
            //- img(src="../assets/images/logo.png", alt="Krafteam")
        .social.col-md-3.col-sm-4.col-xs-6
          .social__mes
            span Мессенджеры
            a(href="https://t.me/Miranixweb" target="_blank")
              img(src="~/assets/images/social/telegram.png", alt="telegram")
              //- img.img-hidden(src="~/assets/images/social/telegram-c.png", alt="telegram-c")
            img(src="~/assets/images/social/viber.png", alt="viber")
            //- img.img-hidden(src="~/assets/images/social/viber-c.png", alt="viber-c")
            a(href="https://api.whatsapp.com/send?phone=79614455665&text=Я%20заинтересован%20заказать%20разработку%20сайта" target="_blank")
              img(src="~/assets/images/social/whatsapp.png", alt="watsupp")
              //- img.img-hidden(src="~/assets/images/social/whatsapp-c.png", alt="watsupp-c")
          .social__soc
            span Мы в соц. сетях
            a(href="https://vk.com/alex_halizov" target="_blank")
              img(src="~/assets/images/social/vk.png", alt="vk")
              //- img.img-hidden(src="~/assets/images/social/vk-c.png", alt="vk-c")
            a(href="https://www.instagram.com/alex_halizov/" target="_blank")
              img(src="~/assets/images/social/instagram.png", alt="instagram")
              //- img.img-hidden(src="~/assets/images/social/instagram-c.png", alt="instagram-c")
        .info-open.col-sm-2.col-xs-6
          p Время работы
          p Пн-сб: 07:00-21:00
          span.info-weekend Выходной - Вск.

        .info-phone.col-md-2.col-sm-3.col-xs-6
          p Тел.:
            a(href="tel:88043337060", title="88043337060")  8 (804) 333-70-60
          a(href="tel:84953000000", title="84953000000")  8 (495) 300-00-00
          p.info-phone-dop Звонок по России бесплатный
        .info-mail.col-md-3.col-sm-12.col-xs-12
          p E-mail:
            span manager@krafteam.com
          span#callback.callback Заказать обратный звонок
    nav.main-nav
      .main-nav-wr.container
        .menu-button
          .button
          .text Меню
        ul.main-menu
          li.main-menu-item
            nuxt-link(to='/') Главная
          li.main-menu-item
            ul.menu-child
              li.menu-child-item(v-for='service in serviceList')
                nuxt-link(:to='service.url') {{ service.name }}
            nuxt-link(to='/uslugi') Услуги
              img(src='~assets/images/menu-arrow.png')
          li.main-menu-item
            ul.menu-child
              li.menu-child-item(v-for='category in categoryList')
                nuxt-link(:to='category.url') {{ category.name }}
            nuxt-link(to='/katalog/tablichki') Каталог товаров
              img(src='~assets/images/menu-arrow.png')
          li.main-menu-item
              nuxt-link(to='/portfolio') Портфолио
          li.main-menu-item
              nuxt-link(to='/otzyvy-klientov') Отзывы клиентов
          li.main-menu-item
              nuxt-link(to='/kontakty') Контакты
        .menu-find
          input.find(type='text' placeholder="Найти")
          button.btn-find(type='submit')
            img(src='~assets/images/search.png')


</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

import { Prop } from 'vue-property-decorator';

@Component()
export default class extends Vue {
  public serviceList = [
    { name: 'Изготовление', url: '/uslugi/izgotovlenie' },
    { name: 'Дизайн', url: '/uslugi/design' },
    { name: 'Ремонт', url: '/uslugi/remont' }
  ];
  public categoryList = [
    { name: 'Таблички', url: '/katalog/tablichki' },
    { name: 'Строки', url: '/katalog/stroki' },
    { name: 'Стенды', url: '/katalog/stand' }
  ];
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
@import '~assets/css/components/Header.scss';
</style>

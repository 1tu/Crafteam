<template lang="pug">
  header.header
    .header__container
      .container
        ul.header__list
          li.header__item
            nuxt-link(to='/nashi-klienty') Наши клиенты
            //- img(src='~/assets/images/infoMenu/nashi-klienty.png')
          li.header__item
            nuxt-link(to='/o-kompanii') О компании
            //- img(src='/assets/images/infoMenu/o-kompanii.png')
          li.header__item
            nuxt-link(to='/oplata') Оплата
            //- img(src='~assets/images/infoMenu/oplata.png')
          li.header__item
            nuxt-link(to='/dostavka') Доставка
            //- img(src='~assets/images/infoMenu/dostavka.png')
          li.header__item
            nuxt-link(to='/punkty-samovyvoza') Пункты самовывоза
            //- img(src='~assets/images/infoMenu/punkty-samovyvoza.png')
          li.header__item
            nuxt-link(to='/avtorizatsiya') Авторизация
            //- img(src='~assets/images/infoMenu/avtorizatsiya.png')

    .container
      .social
        img.social__logo(src="../assets/images/logo.png", alt="Krafteam")
        .social__block
          .social__mess.social__all
            .social__mes
              span Мессенджеры
              a(href="https://t.me/Miranixweb" target="_blank")
                .social__icon.social__iconTG
              a(href="https://t.me/Miranixweb" target="_blank")  
                .social__icon.social__iconVB
              a(href="https://api.whatsapp.com/send?phone=79614455665&text=Я%20заинтересован%20заказать%20разработку%20сайта" target="_blank")
                .social__icon.social__iconWA
            .social__soc
              span Мы в соц. сетях
              a(href="https://vk.com/alex_halizov" target="_blank")
                .social__icon.social__iconVK
              a(href="https://www.instagram.com/alex_halizov/" target="_blank")
                .social__icon.social__iconIG
          .social__all
            p Время работы
            p Пн-сб: 07:00-21:00
            span Выходной - Вс.

          .social__phone.social__all
            p Тел.:
              a(href="tel:88043337060", title="88043337060")  8 (804) 333-70-60
            a(href="tel:84953000000", title="84953000000")  8 (495) 300-00-00
            p.social__par Звонок по России бесплатный
          .social__mail.social__all
            span.social__e-mail E-mail:
            span manager@krafteam.com
            span#callback.social__callback Заказать обратный звонок

    nav.nav
      .nav__container
        .container
          ul.nav__list
            li.nav__item
              nuxt-link(to='/') Главная
            li.nav__item
              ul.nav__child
                li.nav__child-item(v-for='category in categoryList')
                  nuxt-link(:to='category.url') {{ category.name }}
              nuxt-link(to='/katalog/tablichki') Каталог товаров
                img.nav__bottom(src='~assets/images/menu-arrow.png')
            li.nav__item
                nuxt-link(to='/portfolio') Портфолио
            li.nav__item
                nuxt-link(to='/otzyvy-klientov') Отзывы клиентов
            li.nav__item
                nuxt-link(to='/kontakty') Контакты
          //- .menu-find
          //-   input.find(type='text' placeholder="Найти")
          //-   button.btn-find(type='submit')
          //-     img(src='~assets/images/search.png')


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

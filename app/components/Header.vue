<template lang="pug">
    header.header
        nav.info-nav
            .info-nav-wr.container
                ul.info-menu.row
                    li.info-menu-el.col-md-2
                        nuxt-link(to='/nashi-klienty') Наши клиенты
                            //- img(src='~assets/images/infoMenu/nashi-klienty.png') 
                    li.info-menu-el.col-md-2
                        nuxt-link(to='/o-kompanii') О компании
                            //- img(src='~assets/images/infoMenu/o-kompanii.png') 
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
                    nuxt-link(to='/') 
                        img(src="../assets/images/logo.png", alt="Krafteam")
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
                    a(href="84953000000", title="84953000000")  8 (495) 300-00-00
                    p.info-phone-dop Звонок по России бесплатный
                .info-mail.col-md-3.col-sm-12.col-xs-12
                    p E-mail:
                        span manager@krafteam.com
                    span#callback.callback Заказать обратный звонок
        nav.main-nav
            .main-nav-wr.container
              .row
                .menu-button 
                  .button
                  .text Меню
                ul.main-menu.col-xs-9
                    li.main-menu-item.col-md-1.col-xs-2
                        nuxt-link(to='/') Главная
                    li.main-menu-item.col-md-1.col-xs-2
                        nuxt-link(to='/uslugi') Услуги
                    li.main-menu-item.col-md-3.col-xs-2
                        nuxt-link(to='/katalog') Каталог товаров
                    li.main-menu-item.col-md-2.col-xs-2
                        nuxt-link(to='/portfolio') Портфолио
                    li.main-menu-item.col-md-3.col-xs-2
                        nuxt-link(to='/otzyvy-klientov') Отзывы клиентов
                    li.main-menu-item.col-md-2.col-xs-2
                        nuxt-link(to='/kontakty') Контакты
                .menu-find.col-xs-3
                        .menu-find-text Найти


</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {}
});
</script>

<style lang="scss" scoped>
header {
  font-size: 14px;
  font-weight: lighter;
}

.info-nav {
  background-color: #f1f1f1;
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .info-nav {
    display: none;
  }
  .info {
    padding-top: 10px;
  }
  .main-menu {
    display: none;
  }
  .menu-find {
    float: right;
  }
}
.info-menu {
  font-size: 14px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 30px;
  line-height: 30px;
}
.info-menu-el {
  text-decoration: none;
  display: inline;
  text-align: center;
}
a,
.info-menu-el:hover,
.info-menu-el:focus {
  color: #666666;
  text-decoration: none;
}
a {
  border-bottom: 1px transparent;
  transition: 0.4s ease all;
}
.info-menu-el:hover,
.info-menu-el:focus {
  & a {
    border-bottom: 1px solid #666;
  }
}

.info {
  height: 81px;
}
@media screen and (max-width: 991px) {
  .info {
    height: auto;
  }
}

@media screen and (max-width: 1200px) {
  .logo {
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .logo {
    img {
      width: auto;
    }
  }
  .logo,
  .social,
  .info-open,
  .info-phone {
    text-align: center;
  }
  .social {
    margin-bottom: 20px;
    & span {
      display: none;
    }
  }
  .info-mail {
    & span {
      display: block;
    }
  }
}
.social {
  line-height: 28px;
  img {
    margin-right: 10px;
  }
  .social__mes {
    span {
      margin-right: 20px;
    }
  }
  .social__soc {
    span {
      margin-right: 10px;
    }
  }
}

.info-open {
  .info-weekend {
    font-size: 12px;
  }
}
@media screen and (max-width: 991px) {
  .info-open {
    font-size: 12px;
  }
}

.info-phone {
  .info-phone-dop {
    color: #a9a9a9;
    font-size: 12px;
  }
}
@media screen and (max-width: 1200px) {
  .info-phone {
    font-size: 12px;
  }
}

.info-mail {
  .callback {
    color: #00bfed;
    border-bottom: 1px transparent;
    transition: all 0.4s ease-in-out;
    &:hover {
      cursor: pointer;
      color: darken($color: #00bfed, $amount: 1%);
      border-bottom: 1px solid #00bfed;
    }
  }
}
@media screen and (max-width: 991px) {
  .info-mail {
    text-align: center;
    p {
      display: inline-block;
      margin-right: 10px;
    }
  }
}

.main-nav {
  background-color: #00bfed;
  color: #a9a9a9;
  .main-menu {
    list-style: none;
    .main-menu-item {
      a {
        color: #ffffff;
      }

      display: inline-block;
    }
  }
}
.menu-find-text {
  background-color: #fff;
  border-radius: 50%;
  margin-top: 14px;
  margin-bottom: 14px;
}
.menu-button {
  display: none;
  color: #fff;
  float: left;
  margin-top: 14px;
  margin-bottom: 14px;
}
.text {
  display: inline-block;
  vertical-align: middle;
}
.button {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 20px;
  height: 3px;
  border-radius: 50%;
  background-color: #ffffff;
  margin-right: 10px;
  &:after {
    content: '';
    position: absolute;
    top: -5px;
    width: 20px;
    height: 3px;
    border-radius: 50%;
    background-color: #ffffff;
  }
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    width: 20px;
    height: 3px;
    border-radius: 50%;
    background-color: #ffffff;
  }
}
@media screen and (max-width: 768px) {
  .menu-button {
    display: block;
  }
}
</style>

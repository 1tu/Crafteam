<template lang="pug">
  .footer
    .footer-wr.container
        .row
            .footer-left.col-sm-7
                ul.list
                    li.list-item-main
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                ul.list
                    li.list-item-main
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                    li.list-item
                        nuxt-link(to='/') Главная категория
                ul.list
                    li.list-item-main
                        nuxt-link(to='/kontakty') Контакты
                    li.list-item
                        nuxt-link(to='/dostavka') Доставка
                    li.list-item
                        nuxt-link(to='/oplata') Оплата
                    li.list-item
                        nuxt-link(to='/o-kompanii') О компании
                .footer-pay
                    span Способы оплаты
                    .footer-pay-img
                        img(src='~/assets/images/pay/visa-mc.png' alt='Виза мастеркард')
                        img(src='~/assets/images/pay/tinkoff.png' alt='Тинькофф')
                        img(src='~/assets/images/pay/sberbank.png' alt='Сбербанк')
                        img(src='~/assets/images/pay/yandex.png' alt='Яндекс деньги')
                    .footer-pay-info    
                        nuxt-link(to='/oplata') Подробнее об оплате
                a(href="/", title="Гарантия на товар") Гарантия на товар
                a(href="/", title="Возврат некачественного товара") Возврат некачественного товара
            .footer-right.col-sm-5
                .map#map Картинка с картой
                .footer-right-l 
                    a(href="tel:84953000000", title="84953000000") 8 (495) 300-00-00
                    a(href="tel:88043337060", title="88043337060") 8 (804) 333-70-60
                    span Звонок по России бесплатный
                .footer-right-r 
                    ul.list
                        li.list-item
                            nuxt-link(to='/punkty-samovyvoza') 
                                span Пункты самовывоза 
                                span в Ставрополе
                        li.list-item 
                            a(href="/", title="Доехать на личном транспорте")
                                span Доехать на личном транспорте
                        li.list-item
                             a(href="/", title="Доехать на личном транспорте") 
                                span На общественном транспорте
                        li.list-item
                             a(href="/", title="Доехать на личном транспорте") 
                                span Дойти пешком
                .social
                  .social-mes 
                        span Мессенджеры
                        a(href="https://t.me/Miranixweb" target="_blank")
                            img(src="~/assets/images/social/telegram.png", alt="telegram")
                            //- img.img-hidden(src="~/assets/images/social/telegram-c.png", alt="telegram-c")
                        a(href="/", title="Viber") 
                            img(src="~/assets/images/social/viber.png", alt="viber")
                            //- img.img-hidden(src="~/assets/images/social/viber-c.png", alt="viber-c")
                        a(href="https://api.whatsapp.com/send?phone=79614455665&text=Я%20заинтересован%20заказать%20разработку%20сайта" target="_blank")
                            img(src="~/assets/images/social/whatsapp.png", alt="watsupp")
                            //- img.img-hidden(src="~/assets/images/social/whatsapp-c.png", alt="watsupp-c")
                  .social-soc
                        span Мы в соц. сетях
                        a(href="https://vk.com/alex_halizov" target="_blank")
                            img(src="~/assets/images/social/vk.png", alt="vk")
                            //- img.img-hidden(src="~/assets/images/social/vk-c.png", alt="vk-c")
                        a(href="https://www.instagram.com/alex_halizov/" target="_blank")
                            img(src="~/assets/images/social/instagram.png", alt="instagram")
                            //- img.img-hidden(src="~/assets/images/social/instagram-c.png", alt="instagram-c")
        .details
            p Юридические реквизиты: ИП Хализов А.С.
            p ИНН 260806481409
            p ОГРН 315265100027855
            p р/с 40802810200000153158
            p АО "Тинкофф Банк" 044525974


</template>

<style lang="scss" scoped>
.footer {
  background-color: #f8f8f8;
  padding-bottom: 10px;
  padding-top: 30px;
  font-weight: 300;
}
.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  vertical-align: top;
  &-item-main {
    padding-bottom: 20px;
  }
}
.map {
  width: 381px;
  height: 227px;
}
.footer-left {
  .list {
    margin-right: 90px;
    margin-bottom: 100px;
  }
  a {
    color: #666;
    border-bottom: 1px solid #666;
    transition: all 0.2s ease;
    &:hover,
    :focus {
      color: #00ceff;
      border-bottom: 1px solid #00ceff;
      text-decoration: none;
    }
  }
}
@media screen and (max-width: 1200px) {
  .footer-left {
    .list {
      margin-right: 50px;
    }
  }
  .social {
    & span {
      display: none;
    }
  }
}
.footer-pay {
  margin-bottom: 70px;
  &-info {
    margin-top: 10px;
  }
  & ~ a {
    font-size: 14px;
    margin-right: 80px;
  }
  span {
    color: #949494;
    font-size: 24px;
    margin-right: 30px;
    font-weight: 700;
  }
  img {
    vertical-align: bottom;
    margin-right: 10px;
  }
  a {
    font-size: 13px;
  }
}
.footer-right-l {
  width: 50%;
  display: inline-block;
  vertical-align: top;
  a {
    color: #666;
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
    transition: all 0.2s ease;
    &:hover,
    :focus {
      color: #00ceff;
    }
  }
  span {
    font-size: 11px;
  }
}
.social-soc,
.social-mes {
  display: inline-block;
  width: 50%;
}
.social-mes {
  a {
    display: inline-block;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
    margin-right: 10px;
  }
}
.footer-right-r {
  width: 50%;
  vertical-align: top;
  display: inline-block;
  .list {
    font-size: 11px;
    margin-bottom: 45px;
    a {
      text-align: right;
      color: #666;
      text-decoration: none;
      display: block;
      transition: all 0.2s ease;
      margin-bottom: 10px;
      & span {
        border-bottom: 1px solid #666;
      }
      &:hover,
      :focus {
        color: #00ceff;
        & span {
          border-bottom: 1px solid #00ceff;
        }
      }
    }
  }
}
.social-soc {
  text-align: right;
  a {
    display: inline-block;
    margin-right: 10px;
  }
  span {
    font-size: 14px;
    margin-right: 10px;
  }
}

.details {
  p {
    display: inline-block;
    font-size: 14px;
    padding-right: 20px;
  }
}
@media screen and (max-width: 991px) {
  .footer-left {
    & .list {
      margin-right: 40px;
    }
  }
  .footer-right-r {
    .list {
      margin-bottom: 5px;
    }
  }
  .details {
    margin-top: 10px;
  }
}
@media screen and (max-width: 768px) {
  .footer-left {
    & .list {
      margin-right: 15px;
      margin-bottom: 20px;
      & ~ a {
        font-size: 12px;
      }
    }
  }
  .footer-right {
    & .list {
      margin-bottom: 20px;
    }
  }
  .footer-right-r {
    text-align: right;
  }
  .footer-pay {
    margin-bottom: 20px;
  }
  .social {
    margin-bottom: 10px;
  }
  .social-mes,
  .social-soc {
    span {
      display: block;
    }
  }
  .details {
    text-align: center;
    p {
      font-size: 12px;
    }
  }
}
</style>

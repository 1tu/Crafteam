<template lang="pug">
  .footer
    .footer__container
      .container
        .footer__left
          ul.footer__list
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
          ul.footer__list
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
            li.footer__item
                nuxt-link(to='/') Главная категория
          ul.footer__list.footer__align-l
            li.footer__item
                nuxt-link(to='/kontakty') Контакты
            li.footer__item
                nuxt-link(to='/dostavka') Доставка
            li.footer__item
                nuxt-link(to='/oplata') Оплата
            li.footer__item
                nuxt-link(to='/o-kompanii') О компании
          .footer__pay
            .footer__text
              span Способы оплаты:
            .footer__img
              img.footer__image(src='~/assets/images/pay/visa-mc.png' alt='Виза мастеркард')
              img.footer__image(src='~/assets/images/pay/tinkoff.png' alt='Тинькофф')
              img.footer__image(src='~/assets/images/pay/sberbank.png' alt='Сбербанк')
              img.footer__image(src='~/assets/images/pay/yandex.png' alt='Яндекс деньги')
            .footer__info    
              nuxt-link(to='/oplata') Подробнее об оплате
            .footer__link
              nuxt-link(to='/garantii') Гарантия на товар
              a(href="/", title="Возврат некачественного товара") Возврат некачественного товара
        .footer__right
          .footer__map#map 
            img.footer__map-img(src="~/assets/images/map.jpg", alt="map")
   
          ul.footer__right-1
            li
              a(href="tel:84953000000", title="84953000000") 8 (495) 300-00-00
            li  
              a(href="tel:88043337060", title="88043337060") 8 (804) 333-70-60
            li  
              span Звонок по России бесплатный  
          ul.footer__right-2
            li.footer__item-r
              nuxt-link(to='/punkty-samovyvoza') 
                span Пункты самовывоза 
                span в Ставрополе
            li.footer__item-r 
              a(href="/", title="Доехать на личном транспорте")
                span Доехать на личном транспорте
            li.footer__item-r
              a(href="/", title="Доехать на личном транспорте") 
                span На общественном транспорте
            li.footer__item-r
              a(href="/", title="Доехать на личном транспорте") 
                span Дойти пешком
          ul.footer__social
            li.footer__mes
              span.footer__all Мессенджеры
              a.footer__all(href="https://t.me/Miranixweb" target="_blank")
                .footer__icon.footer__iconTG
              a.footer__all(href="https://t.me/Miranixweb" target="_blank")  
                .footer__icon.footer__iconVB
              a.footer__all(href="https://api.whatsapp.com/send?phone=79614455665&text=Я%20заинтересован%20заказать%20разработку%20сайта" target="_blank")
                .footer__icon.footer__iconWA
            li.footer__soc
              span.footer__all Мы в соц. сетях
              a.footer__all(href="https://vk.com/alex_halizov" target="_blank")
                .footer__icon.footer__iconVK
              a.footer__all(href="https://www.instagram.com/alex_halizov/" target="_blank")
                .footer__icon.footer__iconIG
        ul.footer__details
          li.footer__details-item
            p Юридические реквизиты: ИП Хализов А.С.
          li.footer__details-item
            p ИНН 260806481409
          li.footer__details-item
            p ОГРН 315265100027855
          li.footer__details-item
            p р/с 40802810200000153158
          li.footer__details-item
            p АО "Тинкофф Банк" 044525974


</template>

<style lang="scss" scoped>
  @import '~assets/css/base/_variables.scss';
  @import '~assets/css/components/footer.scss';
</style>  

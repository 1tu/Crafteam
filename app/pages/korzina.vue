<template lang="pug">
div
  PageHeader(:breadcrumbs='breadcrumbs')
  section.basket
    .breadcrumb
      .container
        .breadcrumb-link
          nuxt-link(to='/') Главная
          span >
    .container  
      h1 Оформление заказа
      table.basket__table
        thead.basket__head
          th.basket__item1 Заказ
          th Наименование товара
          th Цена
          th Количество
          th Стоимость
          th
        tbody.basket__body
          tr
            td
              img.basket__foto-tovar(src='~assets/images/tovar/foto-tovar.jpg')
            td
              ul
                li.basket__items Адресная табличка на дом
                li.basket__items Артикул: 123456
                li.basket__items Композит
                li.basket__items Размер: 60х30 (Стандарт)
                li.basket__items Тип: Световозвращающая
            td 1750 руб.
            td 
              span.basket__blue -
              span.basket__count 2
              span.basket__blue +
            td 3500 руб.
            td.basket__basket
              .basket__delete
                img(src='~assets/images/tovar/basket.png')
          tr
            td
              img.basket__foto-tovar(src='~assets/images/tovar/foto-tovar.jpg')
            td
              ul
                li.basket__items Адресная табличка на дом
                li.basket__items Артикул: 123456
                li.basket__items Композит
                li.basket__items Размер: 60х30 (Стандарт)
                li.basket__items Тип: Световозвращающая
            td 1750 руб.
            td 
              span.basket__blue -
              span.basket__count 2
              span.basket__blue +
            td 3500 руб.
            td.basket__basket
              .basket__delete
                img(src='~assets/images/tovar/basket.png')
      .basket__cost.mb-4
        span.basket__blue Итого сумма заказа: 7 000 руб.
      h2 Контактная информация
      .panel.mt-4.mb-4
        h2.m-0 ВАЖНО!
        p.m-0 Заказ изготовливается после утверждения макета по e-mail или через мессенджеры Whatsapp, Viber, Telegram. Убедитесь что данные введены корректно.
      form.basket__form
        ul
          li.basket__item-info
            h3.mt-0 Контактное лицо*
          li.basket__item-info
            input.basket__input(type="text" name="name" placeholder="Фамилия Имя Отчество" required)
        ul
          li.basket__item-info
            h3.mb-0.mt-0 Телефон*
          li.basket__item-info
            input.basket__input(type="text" name="phone" placeholder="Номер телефона" required)
        label.checkbox.-large.mt-2.mb-4.basket__checkbox
          ul.basket__list
            li.basket__item-check На этом номере есть:
            li.basket__item-check
              label.checkbox.-large.mt-2  
                input.checkbox__input(type="checkbox")
                .checkbox__label Whatsapp
            li.basket__item-check  
              label.checkbox.-large.mt-2
                input.checkbox__input(type="checkbox")
                .checkbox__label Viber
            li.basket__item-check   
              label.checkbox.-large.mt-2
                input.checkbox__input(type="checkbox")
                .checkbox__label Telegram
        ul
          li.basket__item-info
            h3.mt-0 E-mail*
          li.basket__item-info
            input.basket__input(type="text" name="mail" placeholder="Введите вашу почту" required)  
        ul
          li.basket__item-info
            h3.mt-0 Комментарии к заказу
          li.basket__item-info
            textarea.callback-cost__textarea(type="text" name="text" placeholder="Опишите задачу (по желанию)" required)
      h2.mb-4 Доставка заказа
      ul
        li.basket__item-info
          h3.mb-4.mt-0 Город
        li.basket__item-info
          .basket__select
            select.basket__slct.mb-4
              option Ставрополь
              option Краснодар
              option Волгоград
              option Казань
      .tabs.mt-4
        .tabs__pickup Забрать самостоятельно
        .tabs__courier Заказать доставку курьером
        .tabs__delivery 
          ul
            li.tabs__item
              h2.tabs__way.m-0 Способы доставки
              h2.tabs__way.m-0 Срок доставки
              h2.tabs__way.m-0 Стоимость доставки
            li.tabs__item.active
              .tabs__way 
                label.checkbox.-circle
                  input.checkbox__input(type='radio' name='delivery')
                  .checkbox__label Доставка в пункт выдачи CDEK
                a.tabs__link(href='/') Ставрополь, ул. Пирагова, д.65    
              .tabs__way 
                p 3-7 дней
              .tabs__way 
                p 190 руб.      
            li.tabs__item
              .tabs__way 
                label.checkbox.-circle
                  input.checkbox__input(type='radio' name='delivery')
                  .checkbox__label Доставка в пункт выдачи DPD
                a.tabs__link(href='/') Ставрополь, ул. Старомарьевское шоссе, д.113    
              .tabs__way 
                p 3-7 дней
              .tabs__way 
                p 190 руб.
            li.tabs__item
              .tabs__way 
                label.checkbox.-circle
                  input.checkbox__input(type='radio' name='delivery')
                  .checkbox__label Доставка почтой России по предоплате
                a.tabs__link(href='/') Ставрополь, ул. Старомарьевское шоссе, д.113     
              .tabs__way 
                p 7-14 дней
              .tabs__way 
                p 250 руб. 
    .basket
      .container
        h2 Оплата заказа
        .text.ml-4 Наш менеджер свяжется с Вами для уточнения деталей!
        form.basket__form
          ul
            li.basket__item-info
              h3.mt-0 Cпособ оплаты
            li.basket__item-info
              .basket__select
                select.basket__slct.mb-4
                  option Оплата на расчетный счет
                  option Оплата на расчетный счет
                  option Оплата на расчетный счет
                  option Оплата на расчетный счет
              .basket__item-info
              input.basket__input.basket__input2(type="text" name="companyName" placeholder="Название организации" required)
              .basket__item-info
              input.basket__input.basket__input2(type="text" name="INN" placeholder="ИНН" required)  
          ul
            li.basket__item-info
              h3.mt-0 Комментарий
            li.basket__item-info
              textarea.callback-cost__textarea(type="text" name="text" placeholder="Комментарий к оплате заказа" required)
              label.checkbox.-large.mt-4
                input.checkbox__input(type="checkbox")
                .checkbox__label.mb-4 Даю согласие на обработку персональных данных
              button(href='/').btn.mt-4.mb-4 ОФОРМИТЬ ЗАКАЗ
        .form.mt-4
          .form__callback
            p.mb-4 Оставьте заявку, и мы рассчитаем стоимость работ
            form
              input.form__input(type="hidden" name="nameButton" value="Блок Footer")
              input.form__input(type="text" name="name" placeholder="Ваше имя" required)
              input.form__input(type="text" name="phone" placeholder="Ваш номер телефона" required)
              button.btn.form__button Оставить заявку
              label.checkbox.-large.mt-4
                input.checkbox__input(type="checkbox")
                .checkbox__label Даю согласие на обработку персональных данных
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../components/PageHeader.vue';


@Component({ components: { PageHeader } })
export default class extends Vue {
  async asyncData() {
    const breadcrumbs = [{ name: 'Корзина', link: null }];

    return { breadcrumbs };
  }
}
</script>

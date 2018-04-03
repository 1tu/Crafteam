<template lang="pug">
  .wr
    PageHeader
    section.product
      .container
        .product-calc
          .product-form
            h1 {{ $store.getters.tText($store.state.Product.item.seoTemplate.h1, $store.state.Product.item.seoMeta) }}
            .slider
              .slider__item(:style="{'background-image': 'url('+ $store.state.serverUrl + getConfigValueByKey('form') +')'}")
            .recommend
              h4 Рекомендованая информация
              p Композитная адресная вывеска на дом с ламинированием, размер 60х32: Редактируемый шаблон текста. Размер подтягивается из размера (стандарт).
          .product-prop
            .product-prop-top
              p Артикул:
                span Таб-1234
              label#inStock.in-stock
                input.prop-type_checkbox(type="checkbox", for="inStock", name="stock", value="inStock" checked disabled)
                .checkbox
                .checkbox_label В наличии
            .tabs
              .tab(@click='activeTabIndex = 0' :class="{active : activeTabIndex === 0}") Описание
              //- .tab(@click='activeTabIndex = 1' :class="{active : activeTabIndex === 1}") Выбор формы
            transition(name='fade')
              section(v-show='activeTabIndex === 0')
                .tab-content
                  .prop-type
                    .product-info
                      h2 Размер таблички:
                      p Размер:
                        span 45см х 75см
                      p Размер:
                        span 45см х 75см
                      p Размер:
                        span 45см х 75см
                      p Размер:
                        span 45см х 75см
                    label#floor
                      input.prop-type_checkbox(type="checkbox", for="floor", name="type", value="floor" )
                      .checkbox
                      .checkbox_label Сделать стенд напольным
                        span (+1853)
                    label#frame
                      input.prop-type_checkbox(type="checkbox", for="frame", name="type", value="frame" )
                      .checkbox
                      .checkbox_label Рамка
                        span (+1244)
                    label#option
                      input.prop-type_checkbox(type="checkbox", for="option", name="type", value="option" )
                      .checkbox
                      .checkbox_label Другие опции
                        span (+0)
                    p Цена:
                      span 1234 руб.
                    .buttons
                      button.btn-buy Купить в 1 клик
                      button.btn-cart Добавить в корзину
        .content
          .tabs
            .tab(@click='activeTabContentIndex = 0' :class="{active : activeTabContentIndex === 0}") Описание
            .tab(@click='activeTabContentIndex = 1' :class="{active : activeTabContentIndex === 1}") Оплата
            .tab(@click='activeTabContentIndex = 2' :class="{active : activeTabContentIndex === 2}") Доставка
          transition(name='fade')
            section.description(v-show='activeTabContentIndex === 0')
              iframe(v-if='$store.state.Product.item.seoTemplate.video' height="315" allowfullscreen
                :src="$store.state.Product.item.seoTemplate.video" frameborder="0" allow="autoplay; encrypted-media")
              .description-content.editor(v-html='$store.getters.tText($store.state.Product.item.seoTemplate.content, $store.state.Product.item.seoMeta)')
              //- .share
              //-   .share-container
              //-     p Акция!
              //-     p При заказе от 6500 руб., доставка табличек в В городе бесплатно!
              //- .advantages
              //-   h2 Наши преимущества:
              //-   ul
              //-     li Разработка макета бесплатно!
              //-     li Срок изготовления от 1 часа с момента утверждения макета:
              //-     li Срок изготовления от 1 часа с момента утверждения макета:
              //-     li Скидка до 35% на заказы от 9000 руб.;
              //-     li В производстве только качественные материалы.
              //- .promo
              //-   img(src='~assets/images/tovar/main-slide.jpg')
          transition(name='fade')
            section.pay(v-show='activeTabContentIndex === 1')
              .pay-content
                  h2 Способы оплаты
                  p Варианты оплаты заказа
                  .pay-list
                    .pay-list-item
                      img(src='~assets/images/tovar/slide.jpg')
                      p Перечисление на расчетный счет
                    .pay-list-item
                      img(src='~assets/images/tovar/slide.jpg')
                      p Оплата картой: VISA Mastercart МИР
                    .pay-list-item
                      img(src='~assets/images/tovar/slide.jpg')
                      p Наложенным платежом
                    .pay-list-item
                      img(src='~assets/images/tovar/slide.jpg')
                      p Оплата Webmoney
                    .pay-list-item
                      img(src='~assets/images/tovar/slide.jpg')
                      p Оплата с помощью SMS
                  a(href='/dostavka' target='_blank' rel="nofollow noopener") Подробнее о доставке можно узнать сдесь

          transition(name='fade')
            section.delivery(v-show='activeTabContentIndex === 2')
              .delivery-content
                h2 Доставка заказа
                .point
                  h3 Забрать заказ можно самостоятельно с пункта самовывоза
                  img(src='~assets/images/tovar/main-slide.jpg' alt='Доставка до адреса')
                .courier
                  h3 Или заказать доставку курьером
                  img(src='~assets/images/tovar/main-slide.jpg' alt='Доставка курьером')
                .delivery-method-block
                  img(src='~assets/images/delivery/cdek.png' alt='CDEK')
                  img(src='~assets/images/delivery/dpd.png' alt='DPD')
                  img(src='~assets/images/delivery/postmail.png' alt='Почта России')
                a(href='/dostavka' target='_blank' rel="nofollow noopener") Подробнее о доставке можно узнать сдесь


        .delivery-address
            h2 Где в Ставрополе забрать заказ
            select
              option(v-for='address in delivery' :value='address.name') {{address.name}}
            .delivery-map
        //- .similar-product
          h2 Похожие товары
          .similar-product-list
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
        //- .featured-product
          h2 Рекоммендованые товары
          .featured-product-list
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
            nuxt-link(to='/')
              img(src='~assets/images/tovar/slide.jpg')
        .callback
          h2 Оставьте заявку, и мы рассчитаем стоимость работ
          form.form__call
            input(type="hidden" name="nameButton" value="Блок Footer")
            input(type="text" name="name" placeholder="Ваше имя" required)
            input(type="text" name="phone" placeholder="Ваш номер телефона" required)
            button.btn Оставить заявку
            label#process.process
              input.required(type="checkbox" name="process" for="process")
              .checked
              .checked-text Даю согласие на обработку персональных данных
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../../components/PageHeader.vue';

import { Context } from '../../typings/nuxt';
import { breadcrumbsBase } from '../../shared/data/router.data';
import { makePath } from '../../shared/helpers/location.helper';

@Component({
  components: { PageHeader }
})
export default class extends Vue {
  public activeTabIndex = 0;
  public activeTabContentIndex = 0;
  public delivery = [{ name: 'Ставрополь ул. Ленина' }, { name: 'Ставрополь ул. Мира' }];

  async asyncData(ctx: Context) {
    const path = makePath(ctx.route.fullPath);
    const productName = path[path.length - 1];
    const breadcrumbs = breadcrumbsBase.slice().concat([{ name: 'Товары', link: null } /*{ name: baseCategoryName, link: null } */]);

    await ctx.store.dispatch('Product/getItemByNameTranslit', productName);

    return { breadcrumbs };
  }

  public getConfigValueByKey(key: string) {
    if (!this.$store.state.Product.item.config) return '';
    return this.$store.state.Product.item.config.find(c => c.key === key).value;
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
@import '~assets/css/components/tovar/product.scss';
@import '~assets/css/components/index/share.scss';
@import '~assets/css/components/index/callback.scss';
</style>

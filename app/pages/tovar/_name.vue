<template lang="pug">
  .wr
    PageHeader(:breadcrumbs='breadcrumbs')
    section.product
      .container
        .mb-5
          .product__info
            h1.mt-0.mb-4 {{ $store.getters.tText($store.state.Product.item.seoTemplate.h1, $store.state.Product.item.seoMeta) }}
            .slider
              .slider__item(:style="{'background-image': 'url('+ $store.state.crmUrl + getConfigValueByKey('form') +')'}")
            h4 Рекомендованая конфигурация
            p Композитная адресная вывеска на дом с ламинированием, размер 60х32: Редактируемый шаблон текста. Размер подтягивается из размера (стандарт).

          .product__form
            p.mb-4 Артикул:
              span.ml-3 Таб-1234
            .tabs
              .tab(@click='activeTabIndex = 0' :class="{active : activeTabIndex === 0}") Выбор дизайна
              //- .tab(@click='activeTabIndex = 1' :class="{active : activeTabIndex === 1}") Выбор формы
            transition(name='fade')
              .tab-content(v-show='activeTabIndex === 0')
                Constructor(:schema='$store.state.Product.item.manufacture.schema' :config='$store.state.Product.item.config')
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
import Constructor from '../../components/Constructor.vue';

import { Context } from '../../typings/nuxt';
import { makeSplitPath } from '../../shared/helpers/location.helper';

@Component({ components: { PageHeader, Constructor } })
export default class extends Vue {
  public activeTabIndex = 0;
  public activeTabContentIndex = 0;
  public delivery = [{ name: 'Ставрополь ул. Ленина' }, { name: 'Ставрополь ул. Мира' }];

  async asyncData(ctx: Context) {
    const path = makeSplitPath(ctx.route.fullPath);
    const productName = path[path.length - 1];

    await ctx.store.dispatch('Product/getItemByNameTranslit', productName);
    const breadcrumbs = [{ name: 'Товары', link: null }, { name: ctx.store.state.Product.item.name, link: null }];

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
@import '~assets/css/pages/tovar.scss';
</style>

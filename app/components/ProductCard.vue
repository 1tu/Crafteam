<template lang='pug'>
  .card(v-if='data')
    .card__header
      .card__article Артикул: {{ data.id }}
      .card__compare 
        img(src='~assets/images/katalog/compare.png')
      .card__favourites В избранное
        img(src='~assets/images/katalog/favourites.png')
    .card__slider
      .card__slider_leader
        span Лидер продаж
      .card__slider_sale
        span Скидка 10%
      .card__slider_share
        span Акция!
      .card__slider-frame
        .card__slider-list
          .card__slider-item(v-for='image in data.imageList' :style="{'background-image': 'url('+ image.filepath +')'}")
    .card__body
      .card__name
        p Название таблички до 200 знаков длинной
      .card__config
        template(v-if='data.config')
          .card__config-item(v-for='item in data.config')
            .card__config-name {{ getPropName(item.key) }}
            .card__config-value {{ getPropValue(item.key, item.value) }}
        template(v-else)
          .card__config-item(v-for='item in data.propertyList')
            .card__config-name {{ item.name }}
            .card__config-value {{ item.value }}
      .card__cost
        p Цена:
          span 1000 руб./шт.
      .card__delivery
        p Доставка: 
         span 1 января
      .card__link 
        a Подробнее...
      .card__buttons
        .btn__buy Купить в 1 клик
        .btn__cart
          span +
          img(src='~assets/images/katalog/cart.png')
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

import { Prop } from 'vue-property-decorator';
import { ProductEntity } from 'app/shared/types/product.entity';
import { PreManufactureEntity } from 'app/shared/types/preManufacture.entity';

@Component()
export default class extends Vue {
  @Prop({ required: true, default: () => ({}) })
  public data: ProductEntity & PreManufactureEntity;

  isPremanufacture(item) {
    return item.config;
  }

  public getPropName(key: string) {
    return (this.data.manufacture.schema.find(i => i.key === key) || ({} as any)).name;
  }
  public getPropValue(key: string, value: string) {
    const res = this.data.manufacture.schema.find(i => i.key === key);
    return res ? (res.optionList.find(o => o.value === value) || ({} as any)).name : '';
  }

  public created() {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
@import '~assets/css/components/productCard.scss';
</style>

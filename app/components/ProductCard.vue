<template lang='pug'>
  .card(v-if='data')
    .card__header
      span Артикул: {{ (data.config? 'п-' : 'т-') + data.id }}
    .card__tag.-excelent Лидер продаж
    .card__slider
      .card__slider-item(v-if='data.config'
        :style="{'background-image': 'url('+ $store.state.crmUrl + getConfigValueByKey('form') +')'}")

    nuxt-link.card__name(:to='"/tovar/" + (data.config? "+" : "") + data.nameTranslit') {{ data.name }}
    ul.card__config
      template(v-if='data.config')
        li.card__config-item(v-for='item in data.config')
          .card__config-name {{ getPropName(item.key) }}
          .card__config-value(:title='getPropValue(item.key, item.value)') {{ getPropValue(item.key, item.value) }}
      template(v-else)
        li.card__config-item(v-for='item in data.propertyList')
          .card__config-name {{ item.name }}
          .card__config-value {{ item.value }}

    .card__block.-darker Цена:
      span.card__price {{ 'X' }} руб./шт.

    .card__block
      .card__button
        span.card__button-text В корзину
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

  public getConfigValueByKey(key: string) {
    if (!this.data.config) return '';
    return this.data.config.find(c => c.key === key).value;
  }

  public getPropName(key: string) {
    return (this.data.manufacture.schema.find(i => i.key === key) || ({} as any)).name;
  }
  public getPropValue(key: string, value: string) {
    const res = this.data.manufacture.schema.find(i => i.key === key);
    return res ? (res.optionList.find(o => o.value === value) || ({} as any)).name : '';
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
@import '~assets/css/components/productCard.scss';
</style>

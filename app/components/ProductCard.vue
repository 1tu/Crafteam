<template lang='pug'>
  .card(v-if='data')
    .card__header
      .card__article Артикул: {{ data.id }}
    .card__slider
      .card__slider-frame
        .card__slider-list
          .card__slider-item(v-for='image in data.imageList' :style="{'background-image': 'url('+ image.filepath +')'}")
    .card__body
      .card__name
      .card__config
        template(v-if='data.config')
          .card__config-item(v-for='item in data.config')
            .card__config-name {{ getPropName(item.key) }}
            .card__config-value {{ getPropValue(item.key, item.value) }}
        template(v-else)
          .card__config-item(v-for='item in data.propertyList')
            .card__config-name {{ item.name }}
            .card__config-value {{ item.value }}
      a.card__link Подробнее...

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
.card {
  display: block;
}
</style>

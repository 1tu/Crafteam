<template lang="pug">
.constructor
  .constructor__field(v-for='item in configMap')
    .constructor__key {{ item.s.name }}:
    template(v-if='item.c.isLocked')
      .constructor__value(v-if='item.s.type === 1')
        .constructor__color(:style='"background-color:" + item.c.value')
        span {{ item.o.name }}
      .constructor__value(v-else-if='item.s.type === 2')
        img.constructor__image(:src='$store.state.serverUrl + item.c.value')
      .constructor__value(v-else) {{ item.o.name }}

    template(v-else='item.c.isLocked')
      .constructor__value(v-if='item.s.type === 2')
    //- .constructor__input(v-else) {{ configMap[sItem.key].value }}

  //- label.checkbox.-radio
  //-   input.checkbox__input(type="checkbox")
  //-   .checkbox__label Сделать стенд напольным
  //-     span.ml-2 (+1853)

  //- label.checkbox
  //-   input.checkbox__input(type="checkbox")
  //-   .checkbox__label Рамка
  //-     span.ml-2 (+13)

  //- p Цена:
  //-   span 1234 руб.
  .buttons
    button.btn-buy Добавить в корзину
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import { ManufactureSchemaItem, ManufactureSchemaOption } from '../shared/types/manufacture.entity';
import { PreManufactureConfigItem } from '../shared/types/preManufacture.entity';

@Component()
export default class extends Vue {
  @Prop({ required: true })
  public schema: ManufactureSchemaItem[];
  @Prop({ default: () => [] })
  public config: PreManufactureConfigItem[];
  public configMap: { c: PreManufactureConfigItem; s: ManufactureSchemaItem; o: ManufactureSchemaOption }[] = [];

  public created() {
    this.schema.forEach(s => {
      const c = this.getConfigItem(s.key);
      const o = this.getOption(c.value, s);
      this.configMap.push({ c, s, o });
    });
    this.configMap.sort(a => (a.c.isLocked ? -1 : 1));
    console.log(this.configMap);
  }

  public getConfigItem(key: string) {
    return this.config.find(s => s.key === key) || ({} as any);
  }
  public getOption(value: string, sItem: ManufactureSchemaItem) {
    if (value == null) return {};
    return sItem.optionList.find(o => o.value === value) || ({} as any);
  }
}
</script>

<style lang="scss" scoped>

</style>

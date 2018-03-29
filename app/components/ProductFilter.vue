<template lang='pug'>
  aside.container
    .block(v-for='item in list')
      .block__header {{ item.name }}
      ul.block__body
        li.block__item(v-for='option in item.options')
          label
            input.option__checkbox(type='checkbox' v-model='option.isSelected')
            span.option__name {{ option.name }}
      
    button.submit(@click='search') Найти
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';

import { Prop } from 'vue-property-decorator';
import { CategoryStoreState } from '../store/modules/category/category.storeState';
import { ProductAction } from '../store/modules/product';
import { FilteredPageFilters } from '../shared/types/filteredPage.entity';

interface FilterItem {
  name: string;
  key?: string;
  type: 'category' | 'prop' | string;
  options: FilterOption[];
}
interface FilterOption {
  name: string;
  value: string;
  isSelected: boolean;
}

@Component()
export default class extends Vue {
  @Prop() public filters: FilteredPageFilters;
  public list: FilterItem[];

  @ProductAction getListByFilter;

  public created() {
    this.list = [
      {
        name: 'По назначению',
        type: 'category',
        options: (this.$store.state.Category as CategoryStoreState).list.map(c => ({ name: c.name, value: c.id.toString(), isSelected: false }))
      }
    ].concat(
      (this.$store.state.Category as CategoryStoreState).propList.map(p => ({
        name: p.name,
        key: p.key,
        type: 'prop',
        options: p.options.map(o => ({ ...o, isSelected: false }))
      }))
    );
  }

  public search() {
    const categoryIds = this.list[0].options.filter(o => o.isSelected).map(o => o.value);
    const propKeyValues = this.list
      .slice(1)
      .map(s => ({ key: s.key, valueList: s.options.filter(o => o.isSelected).map(o => o.value) }))
      .filter(s => s.valueList.length);

    console.log('FILTER', categoryIds, propKeyValues);
    this.getListByFilter({ categoryIds, propKeyValues });
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/base/_variables.scss';
.container {
  display: block;
}

.block {
  margin-top: 20px;

  &:first-child {
    margin-top: 0;
  }

  &__header {
    color: $color-black;
    padding-left: 25px;
    font-size: 16px;
    margin-bottom: 5px;
  }
  &__body {
    padding: 25px;
    display: block;
    border-radius: 5px;
    background-color: $color-grey-light;
  }
}
.option {
  &__checkbox {
    margin-right: 10px;
  }
  &__name {
    font-family: Lato;
    color: $color-black;
    font-size: 14px;
  }
}

.submit {
  display: block;
  width: 100%;
  margin-top: 20px;
  background-color: $color-blue;
  border: none;
  height: 40px;
  border-radius: 50px;
  color: $color-white;
}
</style>

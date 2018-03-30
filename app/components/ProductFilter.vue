<template lang='pug'>
  aside.container
    .block(v-for='item in list')
      .block__header {{ item.name }}
      ul.block__body
        li.block__item(v-for='option in item.options')
          label
            input.option__checkbox(v-if='item.type === "category"' type='checkbox' v-model='option.isSelected')
            input.option__checkbox(v-else type='radio' :value='option.value' 
              v-model='props[item.key]' @click='onRadio(item.key, option.value)')
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
import qs from 'query-string';
import { makePath } from '../shared/helpers/location.helper';

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
  public props = {};

  @ProductAction getListByFilter;

  public onRadio(key, value) {
    if (this.props[key] === value) {
      this.props[key] = null;
    }
  }

  public created() {
    console.log('F', this.filters);

    this.list = [
      {
        name: 'По назначению',
        type: 'category',
        options: (this.$store.state.Category as CategoryStoreState).list.map(c => ({
          name: c.name,
          value: c.id.toString(),
          isSelected: this.filters && this.filters.categoryIdList ? this.filters.categoryIdList.indexOf(c.id) !== -1 : false
        }))
      }
    ].concat(
      (this.$store.state.Category as CategoryStoreState).propList.map(p => {
        const value = this.filters && this.filters.propertyKeyValueList ? this.filters.propertyKeyValueList.find(x => x.key === p.key) : null;
        this.$set(this.props, p.key, value ? value.valueList[0] : null);
        return {
          name: p.name,
          key: p.key,
          type: 'prop',
          options: p.options as any
        };
      })
    );
  }

  public search() {
    const categoryIdList = this.list[0].options.filter(o => o.isSelected).map(o => o.value);
    const propertyKeyValueList = Object.keys(this.props)
      .filter(key => this.props[key])
      .map(key => ({ key, valueList: [this.props[key]] }));

    const query = '?' + qs.stringify({ categoryIdList, propertyKeyValueList: JSON.stringify(propertyKeyValueList) });

    window.history.pushState(
      null,
      null,
      (this._isFilteredPage()
        ? '/' +
          makePath(window.location.pathname)
            .slice(0, 2)
            .join('/')
        : window.location.pathname) + query
    );
    this.getListByFilter({ categoryIdList, propertyKeyValueList });
  }

  private _isFilteredPage() {
    return makePath(window.location.pathname).length === 3;
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

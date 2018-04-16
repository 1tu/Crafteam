<template lang="pug">
  .pagination(v-if='pageList.length')
    nuxt-link.pagination__item(v-if='current !== 1' :to='url + "&page=" + (current - 1) ') <
    nuxt-link.pagination__item(v-if='first > 1' :to='url + "&page=1"') 1
    span.pagination__item(v-if='first > 2') ...

    nuxt-link.pagination__item(v-for='page in pageList' :key='page' :to='url + "&page=" + page') {{ page }}

    span.pagination__item(v-if='last < max - 1') ...
    nuxt-link.pagination__item(v-if='last < max' :to='url + "&page=" + max') {{ max }}
    nuxt-link.pagination__item(v-if='current !== max' :to='url + "&page=" + (current + 1) ') >
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop, Watch } from 'vue-property-decorator';

const standart = [1, 2, 3, 4, 5];

@Component()
export default class extends Vue {
  @Prop() public current: number;
  @Prop() public max: number;
  @Prop() public url: string;
  public pageList = [];

  public created() {
    this._onChange();
  }
  public get first() {
    return this.pageList[0];
  }
  public get last() {
    return this.pageList[this.pageList.length - 1];
  }

  @Watch('current')
  @Watch('max')
  private _onChange() {
    this.pageList = this._getCenterList();
  }

  private _getCenterList() {
    if (this.max === 1) return [];
    if (this.max <= 5) return standart.slice(0, this.max);

    let middle = this.current;
    if (middle < 3) middle = 3;
    else if (this.max - middle < 2) middle = this.max - 2;

    return [middle - 2, middle - 1, middle, middle + 1, middle + 2];
  }
}
</script>

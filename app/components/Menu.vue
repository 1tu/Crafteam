<template lang="pug">
  div
    ul
      li(v-for='item in linkList')
        a(@click='$emit("zzk", item)') {{ item.title }}
    span {{ test }}
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component()
export default class extends Vue {
  @Prop({ default: [] })
  linkList: { link: string; title: string }[];
  @Prop() public test: string;

  public zz(data) {
    this.$emit('zzk', data);
  }
}
</script>

<style lang="scss" scoped>

</style>
<template lang="pug">
  .loading(v-if="active")
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component()
export default class extends Vue {
  @Prop({ type: Boolean, default: false })
  public active: boolean;
}
</script>

<style lang="scss" scoped>
.test {
  background: red;
}
</style>
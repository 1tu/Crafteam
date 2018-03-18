<template lang='pug'>
  section.test {{ todayName }}
    Loading(:active='true')
</template>

<script lang='ts'>
import Component from 'nuxt-class-component';
import Vue from 'vue';

import Loading from '../components/Loading.vue';
import { RootGetter } from '../store/root.store';

@Component({ components: { Loading } })
export default class extends Vue {
  @RootGetter todayName;

  public created(): void {}
}
</script>

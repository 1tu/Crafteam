<template lang='pug'>
  section.test {{ todayName }}
    Loading(active)
</template>

<script lang='ts'>
import Component from 'nuxt-class-component';
import Vue from 'vue';

import Loading from '../components/Loading.vue';
import Menu from '../components/Menu.vue';
import { RootGetter, RootState, RootMutation, RootMutation } from '../store/root.store';
import { setTimeout } from 'timers';

@Component({ components: { Loading, Menu } })
export default class extends Vue {
  public active = true;
  @RootGetter todayName;
  @RootMutation setAppName;

  public ss = 'fsafafsfasfsf';

  public log(data) {
    console.log('data', data, data.link);
  }

  public created(): void {
    setTimeout(() => {
      this.active = false;
    }, 2000);
  }
}
</script>

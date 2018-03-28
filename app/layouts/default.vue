<template lang='pug'>
  .wr
    //- Menu
    Header

    main
      <nuxt/>

    Footer

</template>

<script lang='ts'>
import Component from 'nuxt-class-component';
import Vue from 'vue';

import Logo from '../components/Logo.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
// import Menu from "../components/Menu.vue";
import { RootGetter } from '../store/root.store';

@Component({
  components: {
    Logo,
    Header,
    Footer,
    // Menu
  }
})
export default class extends Vue {
  public created(): void {}
}
</script>

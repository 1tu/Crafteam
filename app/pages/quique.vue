<template lang="pug">
  section quique
    Loading(:active="true")
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import Loading from '../components/Loading.vue';

@Component({
  components: { Loading }
})
export default class extends Vue {
  public created(): void {}
}
</script>

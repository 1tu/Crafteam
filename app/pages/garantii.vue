<template lang="pug">
div
  PageHeader(:breadcrumbs='breadcrumbs')
  section.container
    h1 Наши гарантии
    p В случае повреждения груза при доставке <в город>, свяжитесь с нами, мы предпримем действия по устранению это неприятной ситуации.
    p При наличии мотивированной и обоснованной претензии по заказу, мы предпримем все возможные шаги, чтобы достигнуть решения сложившейся ситуации комфортного для обеих сторон.
    p Каждая ситуация индивидуальная, поэтому для начала свяжитесь с менеджером по электронной почте или телефону указанным на страницу контакты. Укажите номер заказа и опишите сложившуюся ситуацию.
    p Менеджер зафиксирует информацию и даст информацию по дальнейшим действиям.
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
import PageHeader from '../components/PageHeader.vue';

@Component({ components: { PageHeader } })
export default class extends Vue {
  async asyncData() {
    const breadcrumbs = [{ name: 'Гарантии', link: null }];

    return { breadcrumbs };
  }
}
</script>

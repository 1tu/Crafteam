<template lang='pug'>

 .wr
  section.title
    .container
      h1 Рекламное агенство в Ставрополе
      p Компания ХХХ в Ставрополе
  section.breadcrumb
    .container
      .breadcrumb-link
        nuxt-link(to='/') Главная
        span >
      .anchor
        a(href='#calc') Рассчитать стоимость
        a(href='#cost') Цены
        a(href='#samples') Образцы
        a(href='#video') Видео
  .callback
    .container
      h2 Оставьте заявку, и мы рассчитаем стоимость работ
      form.form__call
          input(type="hidden" name="nameButton" value="Блок Footer")
          input(type="text" name="name" placeholder="Ваше имя" required)
          input(type="text" name="phone" placeholder="Ваш номер телефона" required)
          button.btn Оставить заявку
          label#process.process
              input.required(type="checkbox" name="process" for="process")
              .checked
              .checked-text Даю согласие на обработку персональных данных
  section.text 
    .container
      h2 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ с Ставрополе можно заполнв форму обратной связи.
  section.goods
    .container
      h2 Товары и услуги
      nuxt-link(to='/')
        .item.led-str.col-sm-4
          h3 Бегущие строки
      nuxt-link(to='/')
        .item.a-tbl.col-sm-4
          h3 Изготовление табличек
      nuxt-link(to='/')
        .item.info-stand.col-sm-4
          h3 Изготовление стендов
      nuxt-link(to='/')
        .item.led-components.col-sm-4
          h3 Комплектующие для бегущих строк
      nuxt-link(to='/')
        .item.print.col-sm-4
          h3 Печать и монтаж баннеров
      nuxt-link(to='/')
        .item.video-monitor.col-sm-4
          h3 Видео высески и уличные экраны
  section.text 
    .container
      h2 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ с Ставрополе можно заполнв форму обратной связи.
  section.big-map
    .container
      h2 Города в которых мы работаем
      .map-section
  section.text 
    .container
      h2 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ с Ставрополе можно заполнв форму обратной связи.
  .callback-cost
    .container
     .callback-cost-wr
      h2 Оставьте заявку, и мы рассчитаем стоимость работ
      form.form__call
          input(type="hidden" name="nameButton" value="Блок Footer")
          input(type="text" name="name" placeholder="Ваше имя" required)
          input(type="text" name="phone" placeholder="Ваш номер телефона" required)
          button.btn Оставить заявку
          label#process.process
              input.required(type="checkbox" name="process" for="process")
              .checked
              .checked-text Даю согласие на обработку персональных данных
  section.share
    .container
      .share-container
        h2 Внимания АКЦИЯ!
        p Интересует изготовление офисных табличек? Мы изготовим офисные таблички из оргстекла в Ставрополе. Используем прозрачный пластик для настольных изделий, а также обычный пластик пвх. Кроме того, таблички могут поставляться на металлических дистанционых держателях.
  section.clients
    .container
      h2 Наши клиенты
      .item.col-sm-3
      .item.col-sm-3
      .item.col-sm-3
      .item.col-sm-3
      .item.col-sm-3
      .item.col-sm-3
      .item.col-sm-3
      .item.col-sm-3
  .callback
    .container
      h2 Оставьте заявку, и мы рассчитаем стоимость работ
      form.form__call
          input(type="hidden" name="nameButton" value="Блок Footer")
          input(type="text" name="name" placeholder="Ваше имя" required)
          input(type="text" name="phone" placeholder="Ваш номер телефона" required)
          button.btn Оставить заявку
          label#process.process
              input.required(type="checkbox" name="process" for="process")
              .checked
              .checked-text Даю согласие на обработку персональных данных
</template>

<script lang='ts'>
import Component from 'nuxt-class-component';
import Vue from 'vue';

// import Loading from '../components/Loading.vue';
// import Menu from '../components/Menu.vue';
// import { mainMenu } from '../shared/menu.variables';
// import { setTimeout } from 'timers';

@Component({
  components: {
    // Loading,
    // Menu
  }
})
export default class extends Vue {
  // public active = true;

  // public menu = mainMenu;
  // public ss = 'fsafafsfasfsf';

  // public log(data) {
  //   console.log('data', data, data.link);
  // }

  public created(): void {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/components/index/title.scss';
@import '~assets/css/components/index/breadcrumb.scss';
@import '~assets/css/components/index/callback.scss';
@import '~assets/css/components/index/text.scss';
@import '~assets/css/components/index/goods.scss';
@import '~assets/css/components/index/big-map.scss';
@import '~assets/css/components/index/callback-cost.scss';
@import '~assets/css/components/index/share.scss';
@import '~assets/css/components/index/clients.scss';

.title {
  background: url('~assets/images/main-bg.jpg') center center cover;
}
.led-str {
  background: url('~assets/images/goods/led-str.png') cover center bottom;
}
.a-tbl {
  background: url('~assets/images/goods/a-tbl.png') cover center bottom;
}
.info-stand {
  background: url('~assets/images/goods/info-stand.png') cover center bottom;
}
.led-components {
  background: url('~assets/images/goods/led-components.png') cover center bottom;
}
.print {
  background: url('~assets/images/goods/print.png') cover center bottom;
}
.video-monitor {
  background: url('~assets/images/goods/video-monitor.png') cover center bottom;
}
</style>


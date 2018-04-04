<template lang='pug'>

 .wr
  section.title
    .container
      h1 Рекламное агенство в {{ $store.state.city.namePrepositional }}
      p Компания ХХХ в {{ $store.state.city.namePrepositional }}
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
  section
    .container
      h2 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.
  section.goods
    .container
      h2 Товары и услуги
      nuxt-link(to='/')
        .item.col-sm-4
          h3 Бегущие строки
          .led-str
      nuxt-link(to='/')
        .item.col-sm-4
          h3 Изготовление табличек
          .a-tbl
      nuxt-link(to='/')
        .item.col-sm-4
          h3 Изготовление стендов
          .info-stand
      nuxt-link(to='/')
        .item.col-sm-4
          h3 Комплектующие для бегущих строк
          .led-components
      nuxt-link(to='/')
        .item.col-sm-4
          h3 Печать и монтаж баннеров
          .print
      nuxt-link(to='/')
        .item.col-sm-4
          h3 Видео высески и уличные экраны
          .video-monitor
  section
    .container
      h2 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.
  section.big-map
    .container
      h2 Города в которых мы работаем
      .map-section
  section
    .container
      h2 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.
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
        p Интересует изготовление офисных табличек? Мы изготовим офисные таблички из оргстекла в {{ $store.state.city.namePrepositional }}. Используем прозрачный пластик для настольных изделий, а также обычный пластик пвх. Кроме того, таблички могут поставляться на металлических дистанционых держателях.
  section.clients
    .container
      h2 Наши клиенты
      .item.col-sm-3
        img(src='~assets/images/partners/gazprom.png' alt='Газпром').gazprom
      .item.col-sm-3
        img(src='~assets/images/partners/mc.png' alt='Мебельсити').mc
      .item.col-sm-3
        img(src='~assets/images/partners/mebel-int.png' alt='Мебель в интерьере').mebel-int
      .item.col-sm-3
        img(src='~assets/images/partners/gallery.png' alt='ТЦ Галлерея').gallery
      .item.col-sm-3
        img(src='~assets/images/partners/sengiley.png' alt='Сингелей').sengiley
      .item.col-sm-3
        img(src='~assets/images/partners/dedal.png' alt='Dedal').dedal
      .item.col-sm-3
        img(src='~assets/images/partners/zhkh-gorki.png' alt='ЖКХ Горки').zhkh-gorki
      .item.col-sm-3
        img(src='~assets/images/partners/avetti.png' alt='Avetti').avetti
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

@Component()
export default class extends Vue {
  public created(): void {}
}
</script>

<style lang="scss" scoped>
@import '~assets/css/pages/index.scss';
</style>


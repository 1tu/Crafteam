<template lang='pug'>

 .wr
  section.title
    .container
      h1.m-0 Рекламное агенство в {{ $store.state.city.namePrepositional }}
      p Компания ХХХ в {{ $store.state.city.namePrepositional }}
  PageHeader
  .form
    .container
      .form__callback
        p.mb-4 Оставьте заявку, и мы рассчитаем стоимость работ
        form
          input.form__input(type="hidden" name="nameButton" value="Блок Footer")
          input.form__input(type="text" name="name" placeholder="Ваше имя" required)
          input.form__input(type="text" name="phone" placeholder="Ваш номер телефона" required)
          button.btn.form__button Оставить заявку
          label.checkbox.-large.mt-4
            input.checkbox__input(type="checkbox")
            .checkbox__label Даю согласие на обработку персональных данных
  section
    .container
      h3 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.
  section.goods
    .container
      h3 Товары и услуги
      nuxt-link(to='/')
        .goods__item
          h3 Бегущие строки
          .led-str
      nuxt-link(to='/')
        .goods__item
          h3 Изготовление табличек
          .a-tbl
      nuxt-link(to='/')
        .goods__item
          h3 Изготовление стендов
          .info-stand
      nuxt-link(to='/')
        .goods__item
          h3 Комплектующие для бегущих строк
          .led-components
      nuxt-link(to='/')
        .goods__item
          h3 Печать и монтаж баннеров
          .print
      nuxt-link(to='/')
        .goods__item
          h3 Видео высески и уличные экраны
          .video-monitor
  section
    .container
      h3 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.
  section.big-map
    .container
      h3 Города в которых мы работаем
      .map-section
  section
    .container
      h3 Заголовок текста
      p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.
  .callback-cost
    .container
     .callback-cost-wr
      h3 Оставьте заявку, и мы рассчитаем стоимость работ
      form.form__call
        .callback-cost__left
          input(type="hidden" name="nameButton" value="Блок Footer")
          input(type="text" name="name" placeholder="Ваше имя" required)
          input(type="text" name="phone" placeholder="Ваш номер телефона" required)
          .callback-cost__none1
            label.checkbox.-large.mt-2
              input.checkbox__input(type="checkbox")
              .checkbox__label Даю согласие на обработку персональных данных
        .callback-cost__right
          textarea.callback-cost__textarea(type="text" name="text" placeholder="Опишите задачу (по желанию)" required)
          .callback-cost__none2
            label.checkbox.-large.mt-2
              input.checkbox__input(type="checkbox")
              .checkbox__label Даю согласие на обработку персональных данных
          button.btn Оставить заявку
  .container
    section.panel
      h2.mb-4 Внимания АКЦИЯ!
      p Интересует изготовление офисных табличек? Мы изготовим офисные таблички из оргстекла в {{ $store.state.city.namePrepositional }}. Используем прозрачный пластик для настольных изделий, а также обычный пластик пвх. Кроме того, таблички могут поставляться на металлических дистанционых держателях.
  section.clients
    .container
      h2 Наши клиенты
      .clients__item
        img(src='~assets/images/partners/gazprom.png' alt='Газпром').gazprom
      .clients__item
        img(src='~assets/images/partners/mc.png' alt='Мебельсити').mc
      .clients__item
        img(src='~assets/images/partners/mebel-int.png' alt='Мебель в интерьере').mebel-int
      .clients__item
        img(src='~assets/images/partners/gallery.png' alt='ТЦ Галлерея').gallery
      .clients__item
        img(src='~assets/images/partners/sengiley.png' alt='Сингелей').sengiley
      .clients__item
        img(src='~assets/images/partners/dedal.png' alt='Dedal').dedal
      .clients__item
        img(src='~assets/images/partners/zhkh-gorki.png' alt='ЖКХ Горки').zhkh-gorki
      .clients__item
        img(src='~assets/images/partners/avetti.png' alt='Avetti').avetti
</template>

<script lang='ts'>
import Component from 'nuxt-class-component';
import Vue from 'vue';
import PageHeader from '../components/PageHeader.vue';

@Component({ components: { PageHeader } })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~assets/css/pages/index.scss';
</style>


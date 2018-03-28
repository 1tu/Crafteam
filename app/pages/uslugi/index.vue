<template lang="pug">
  .main
    section.title
        .container
            .content-title
                img(src="~assets/images/uslugi/main-img.jpg" alt='')
            .text 
                h1 Заголовок текста
                p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.    
            .callback
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
        .breadcrumb
            .container
                .breadcrumb-link
                    nuxt-link(to='/') Главная
                    span >
                .anchor
                    a(href='#calc') Рассчитать стоимость
                    a(href='#cost') Цены
                    a(href='#samples') Образцы
                    a(href='#video') Видео
    section.content 
        .container
            .content-table
                h2 Заголовок текста
                table
                    tr
                        th Столбец 1
                        th Столбец 2
                        th Столбец 3
                        th Столбец 4
                        th Столбец 5
                    tr
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                    tr
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                    tr
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                    tr
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                    tr
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
                        td Ячейка 1
            .content-video
                h2 Наиболее эффективные таблички получаются при использовании:
                .list.col-sm-6
                    ul 
                        li объемными логотипами;
                        li объемными буквами;
                        li цветными пленками;
                        li полноцветными изображениями;
                    ol
                        li объемными логотипами;
                        li объемными буквами;
                        li цветными пленками;
                        li полноцветными изображениями;
                .video.col-sm-6
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/OQkY_iKxBjQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            .content-text
                .text.col-sm-6
                    h2 Заголовок текста
                    p Предлагаем заказать создание сайта под ключ - визитку или корпоративный сайт с уникальным дизайном и полностью готовый под поисковое продвижение. При создании выполняется оптимизация под SEO. Мы создаём адаптивный дизайн, занимаемся доработкой и поддержкой уже работающих ресурсов, делаем их продуктивными и прибыльными. При заказе разработки сайта, мы поможем четко определить цели и задачи, для которых Вам нужен интеренет-ресурс и как он поможет увеличить прибыль. Мы поможем разобраться, не увеличивая стоимость услуг за консультации. Уточнить стоимость сайта под ключ в {{ $store.state.city.namePrepositional }} можно заполнв форму обратной связи.    
                .text.col-sm-6
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
    section.portfolio
        .container
            .content-portfolio
                h2 Галлерея проектов/Портфолио
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
                nuxt-link(to='/')
                    .item
                        img(src='~assets/images/uslugi/block.jpg')
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
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component()
export default class extends Vue {
  public created(): void {}
}
</script>

<style lang='scss' scoped> 
@import '~assets/css/components/uslugi/title.scss';
@import '~assets/css/components/uslugi/content-video.scss';
@import '~assets/css/components/uslugi/portfolio.scss';
@import '~assets/css/components/index/text.scss';
@import '~assets/css/components/index/callback.scss';
@import '~assets/css/components/index/breadcrumb.scss';
@import '~assets/css/components/index/callback-cost.scss';
@import '~assets/css/components/index/share.scss';
</style>

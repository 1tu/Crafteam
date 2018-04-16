const tText = require('./tText.js');

module.exports = [
  { path: '/', name: () => 'Главная' },
  // { path: '/nashi-klienty', name: () => 'Наши клиенты' },
  { path: '/o-kompanii', name: () => 'О компании' },
  { path: '/oplata', name: () => 'Оплата' },
  { path: '/dostavka', name: () => 'Доставка' },
  // { path: '/punkty-samovyvoza', name: () => 'Пункты самовывоза' },
  // { path: '/avtorizatsiya', name: () => 'Авторизация' },
  // { path: '/uslugi', name: () => 'Услуги' },
  // { path: '/portfolio', name: () => 'Портфолио' },
  // { path: '/otzyvy-klientov', name: () => 'Отзывы клиентов' },
  { path: '/kontakty', name: () => 'Контакты' },
  {
    path: '/katalog',
    name: () => 'Каталог',
    notExist: true,
    child: {
      listOpts: () => ({ url: '/category/listBase' }),
      item: {
        opts: categoryFromList => ({ url: '/category/byNameTranslit', params: { nameTranslit: categoryFromList.nameTranslit } }),
        path: (parentPath, category) => parentPath + '/' + category.nameTranslit,
        name: category => tText('{{ keys.0 }}', null, category.seoList[0].seoMeta),
        child: {
          listOpts: parentItem => ({ url: '/filteredPage/listByCategoryId', params: { categoryId: parentItem.id } }),
          item: {
            opts: fpFromList => ({ url: '/filteredPage/byUrl', params: { url: fpFromList.url } }),
            path: (parentPath, fp) => parentPath + fp.url.replace(/\/[^\/]+/, ''),
            name: fp => tText('{{ keys.0 }}', null, fp.seoMeta)
          }
        }
      }
    }
  },
  {
    path: '/tovar',
    name: () => 'Товары',
    notExist: true,
    child: {
      listOpts: () => ({ url: '/product/listByFilter' }),
      item: {
        opts: productFromList => ({
          url: '/product/byNameTranslit',
          params: { nameTranslit: (productFromList.config ? '+' : '') + productFromList.nameTranslit }
        }),
        path: (parentPath, product) => parentPath + '/' + (product.config ? '+' : '') + product.nameTranslit,
        name: product => tText('{{ keys.0 }}', null, product.seoMeta)
      }
    }
  }
];

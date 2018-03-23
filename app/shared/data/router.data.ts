export const urlMap = {
  catalog: { name: 'Каталог' },
  'nashi-klienty': { name: 'Наши клиенты', link: '/nashi-klienty' },
  'o-kompanii': { name: 'О компании' },
  oplata: { name: 'Оплата' }
};

export interface Breadcrumb {
  name: string;
  link?: string;
}

export const breadcrumbsBase: Breadcrumb[] = [{ name: 'Главная', link: '/' }];

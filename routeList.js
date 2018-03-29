const environment = process.env.NODE_ENV;
const host = process.env.HOST;
const port = process.env.HOST;

require('dotenv').config({ path: './config/' + environment + '.env' });
const cityList = ['stavropol', 'moskva'];

const urlList = [
  '/',
  '/nashi-klienty',
  '/o-kompanii',
  '/oplata',
  '/dostavka',
  '/punkty-samovyvoza',
  '/avtorizatsiya',
  '/uslugi',
  '/portfolio',
  '/otzyvy-klientov',
  '/kontakty',
  '/katalog/tablichki'
];

const result = [];

urlList.forEach(url => {
  cityList.forEach(city => {
    result.push(`http://${city}.${host}:${port + url}`);
  });
});

module.exports = urlList;

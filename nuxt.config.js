// Info about configuration https://nuxtjs.org/guide/configuration/
const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');
let environment = process.env.NODE_ENV;
process.env.NODE_ENV = JSON.stringify(environment);
require('dotenv').config({ path: './config/' + environment + '.env' });

rules((name, rule) => rule(environment, environments));

// Define global plugins
let plugins = [];

const port = process.env.PORT;
const host = process.env.HOST;
// const baseUrl = '/';
const baseUrl = process.env.BASE_URL || `http://${host}${port ? ':' + port : ''}/`;
const baseApiUrl = baseUrl + 'api/';
const shopHost = process.env.SHOP_HOST;

const serverBaseUrl = process.env.SERVER;
// Add non-test environment plugins
const testPlugins = [
  new webpack.DefinePlugin({
    global: {}
  })
];

if (environment !== environments.test) {
  plugins = [...plugins, ...testPlugins];
}

module.exports = {
  dev: environment !== environments.production,
  env: {
    type: environment,
    host,
    serverBaseUrl,
    port,
    baseUrl,
    baseApiUrl,
    shopHost
  },
  head: {
    title: 'My app',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }]
  },
  loading: { color: '#1FC2C8' },
  srcDir: './app',
  buildDir: './dist/.nuxt',
  css: ['~/assets/css/main.scss'],
  build: {
    extractCSS: true,
    vendor: ['babel-polyfill', 'vuex-class', 'nuxt-class-component' /*, 'vue-i18n' */],
    rules: [rules.scriptsLint, rules.scripts, rules.html],
    plugins: []
  },
  plugins: ['~plugins/filters.ts'],
  modules: [
    '~/modules/typescript',
    '@nuxtjs/axios',
    [
      '@nuxtjs/component-cache',
      {
        max: 10000,
        maxAge: 1000 * 60 * 60 * 24
      }
    ]
  ]
};

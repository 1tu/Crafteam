// Info about configuration https://nuxtjs.org/guide/configuration/
const webpack = require('webpack');
const path = require('path');
const { paths, environments } = require('./tasks/config/options');
const _ = require('./tasks/config/helpers');

let rules = require('require.all')('./tasks/rules');

let environment = process.env.NODE_ENV;
process.env.NODE_ENV = JSON.stringify(environment);

rules((name, rule) => rule(environment, environments));

// Define global plugins
let plugins = [];

const port = process.env.PORT || process.env.npm_package_config_nuxt_port || '3000';

const host = process.env.HOST || process.env.npm_package_config_nuxt_host || 'localhost';

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
    port,
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`
  },
  head: {
    title: 'My app',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#1FC2C8' },
  srcDir: './app',
  buildDir: './dist/.nuxt',
  css: ['~/assets/css/main.sass'],
  build: {
    extractCSS: true,
    vendor: ['babel-polyfill', 'vuex-class', 'nuxt-class-component' /*, 'vue-i18n' */],
    rules: [rules.scriptsLint, rules.scripts, rules.html],
    plugins: []
  },
  // plugins: ['~/plugins/i18n.js'],
  modules: ['~/modules/typescript', '@nuxtjs/axios', '@nuxtjs/component-cache']
};

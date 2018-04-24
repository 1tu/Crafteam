const environment = process.env.NODE_ENV;
require('dotenv').config({ path: './config/' + environment + '.env' });

const { Nuxt, Builder } = require('nuxt');

const cors = require('cors');
const app = require('express')();
const api = require('./api');

const config = require('../nuxt.config.js');
const nuxt = new Nuxt(config);

const sHost = config.env.shopHost.split('.');

app.use(
  cors({
    origin: [new RegExp(config.env.host), !config.dev ? new RegExp('http://' + sHost[0] + '[^.]*' + `\.${sHost[1]}`) : null],
    methods: 'GET,POST',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);
app.use('/api', api);
app.use(nuxt.render);

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Start express server
app.listen(config.env.port);
console.log('Server listening on http://' + config.env.host + ':' + config.env.port);

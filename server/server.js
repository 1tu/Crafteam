// Custom server from official example https://github.com/nuxt/nuxt.js/blob/dev/examples/custom-server/server.js
const { Nuxt, Builder } = require('nuxt');

const app = require('express')();
const api = require('./api');

const config = require('../nuxt.config.js');
const nuxt = new Nuxt(config);

app.use('/api', api);
// Give nuxt middleware to express
app.use(nuxt.render);

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Start express server
app.listen(config.env.port, config.env.host);
console.log('Server listening on http://' + config.env.host + ':' + config.env.port);

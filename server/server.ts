import express from 'express';
import { Builder, Nuxt } from 'nuxt';

import config from '../nuxt.config';
import api from './api';

const app = express();
const nuxt = new Nuxt(config);

app.set('port', config.env.port);
app.use('/api', api);

app.use(nuxt.render);

// hot rebuild for dev
if (config.dev) {
  new Builder(nuxt).build().catch(error => {
    console.error(error);
    process.exit(1);
  });
}

app.listen(config.env.port, config.env.host as any);
console.log('Server listening on ' + config.env.host + ':' + config.env.port); // eslint-disable-line no-console

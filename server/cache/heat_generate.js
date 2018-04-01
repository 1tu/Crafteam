const { promisify } = require('util');
const fs = require('fs');

const axios = require('axios');
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: './config/' + environment + '.env' });
const mapTemplate = require('./mapTemplate');

const serverUrl = `http://localhost:${process.env.PORT}/api`;

(async function exec() {
  try {
    const res = await Promise.all(
      mapTemplate.map(async route => {
        const item = { name: route.name() };
        if (!route.notExist) item.url = route.path;
        if (route.child) {
          item.childList = await handleChild(route.child, route.path, null);
        }
        return item;
      })
    );
    fs.writeFile('./server/sitemap.json', JSON.stringify(res), err => {
      console.log('SITEMAP GENERATED');
    });
  } catch (e) {
    console.log('Generate ERROR:', e);
  }
})();

async function handleChild(child, parentPath, parentItem) {
  const listOpts = child.listOpts(parentItem);
  const listRes = await axios.get(serverUrl + listOpts.url, { params: listOpts.params });
  return await Promise.all(
    listRes.data.map(async itemFromList => {
      const itemOpts = child.item.opts(itemFromList);
      const itemRes = await axios.get(serverUrl + itemOpts.url, { params: itemOpts.params });
      const item = {
        url: child.item.path(parentPath, itemRes.data),
        name: child.item.name(itemRes.data)
      };
      if (child.item.child) item.childList = await handleChild(child.item.child, item.url, itemRes.data);
      return item;
    })
  );
}

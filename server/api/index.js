const { Router } = require('express');
const axios = require('axios');
const config = require('../../nuxt.config');
const router = Router();

const token = 'b875aba36dc5d56bb32354cd864b1ddcdf52b3fa3eb135cb4a87ca4207d740770f73302e58155f97c441d95a070442a323ab398639ea276358f83602e55d8229';
// const token = 'testapi';

const routeList = [
  '/shop/byHost',
  '/city/byNameTranslit',
  '/category/listBase',
  '/category/listByBaseId',
  '/category/byNameTranslit',
  '/property/listCategoryIds',
  '/filteredPage/byUrl',
  '/filteredPage/listByCategoryId',
  '/product/byId',
  '/product/listByIds',
  '/product/listByFilter'
];

const defaultParams = { token };
axios.get(config.env.serverBaseUrl + '/shop/byHost', { params: { ...defaultParams, host: config.env.shopHost } }).then(res => {
  defaultParams.shopId = res.data.id;
});

routeList.forEach(route => {
  router.get(route, async (req, res, next) => {
    const params = { ...req.query, ...defaultParams };
    const result = await axios.get(config.env.serverBaseUrl + route, { params });
    res.json(result.data);
  });
});

module.exports = router;

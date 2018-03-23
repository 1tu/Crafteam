const { Router } = require('express');
const axios = require('axios');
const config = require('../../nuxt.config');
const router = Router();

const routeList = [
  '/shop/byDomain',
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

routeList.forEach(route => {
  router.get(route, async (req, res, next) => {
    const params = { ...req.query, token: 'testapi' };
    const result = await axios.get(config.env.serverBaseUrl + route, { params });
    res.json(result.data);
  });
});

module.exports = router;

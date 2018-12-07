'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT_URL: JSON.stringify('http://rating.wemalltech.com/rating-manager/'),//$http请求头公共域名
})

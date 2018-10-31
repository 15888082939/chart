'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539586418181_697';
  // add your config here
  config.middleware = [];

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/blog',
    options: {
      server: {
        poolSize: 20
      },
    },
  };


  // 允许请求
  config.cors = {
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
};

config.security = {
    csrf: {
        enable: false,
        ignoreJSON:true
    },
    domainWhiteList:['http://localhost:8080']
};

config.io={
  init:{ },
  namespace:{
    '/':{
      connectionMiddleware:['auth'],
      packetMiddeware:['filter'],
    },
    '/example':{
      connectionMiddleware:[],
      packetMiddeware:[],
    }
  }
}
  return config;
};

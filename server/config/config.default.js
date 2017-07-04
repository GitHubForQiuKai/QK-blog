'use strict';

module.exports = appInfo => {

  const config = {};
  config.middleware = [ 'mysql' ];
  // should change to your own
  config.keys = appInfo.name + '_1497840315908_4419';

  // add your config here

  return config;
};

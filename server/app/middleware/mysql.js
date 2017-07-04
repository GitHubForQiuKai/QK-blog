'use strict';
const Sequelize = require('sequelize');
const Blog = require('../model/blog')();
module.exports = () => {
  return async(ctx, next) => {
    const sequelize = new Sequelize('blog', 'root', '123456', {
      host: '127.0.0.1',
      port: '3306',
      dialect: 'mysql',
    });
    sequelize.define(Blog.name, Blog.schema, Blog.options);
    ctx.model = sequelize.models;
    await next();
  };
};

'use strict';
const Sequelize = require('sequelize');

module.exports = app => {
  return {
    name: 'about_blog',
    schema: {
      blog_id: {
        type: Sequelize.STRING(8),
        primaryKey: true,
      },
      blog_keyword: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      blog_description: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      blog_name: {
        type: Sequelize.STRING(36),
        allowNull: false,
      },
      blog_title: {
        type: Sequelize.STRING(128),
        allowNull: true,
      },
    },
    options: {
      timestamps: false,
      freezeTableName: true,
      hooks: {
        beforeCreate: () => {
          console.log(app);
        },
      },
    },
  };
};

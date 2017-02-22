/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    article_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    article_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    article_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    article_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    article_click: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    sort_article_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "1"
    },
    article_type: {
      type: DataTypes.INTEGER(13),
      allowNull: false,
      defaultValue: "1"
    },
    article_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    article_up: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    article_support: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'article'
  });
};

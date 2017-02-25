/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article_sort', {
    sort_article_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    sort_article_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'article_sort'
  });
};

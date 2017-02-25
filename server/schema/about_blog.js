/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('about_blog', {
    blog_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    blog_keyword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'about_blog'
  });
};

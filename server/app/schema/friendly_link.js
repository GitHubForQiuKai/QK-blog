/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('friendly_link', {
    link_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    link_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link_logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    show_order: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    }
  }, {
    tableName: 'friendly_link'
  });
};

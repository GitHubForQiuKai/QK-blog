/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_group', {
    g_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group_power: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'user_group'
  });
};

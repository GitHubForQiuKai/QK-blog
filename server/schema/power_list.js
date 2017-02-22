/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('power_list', {
    p_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    power_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    power_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'power_list'
  });
};

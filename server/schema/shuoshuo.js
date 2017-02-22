/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shuoshuo', {
    shuo_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    shuo_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false,
      defaultValue: "0"
    },
    shuo_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shuoshuo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "3"
    }
  }, {
    tableName: 'shuoshuo'
  });
};

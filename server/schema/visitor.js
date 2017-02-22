/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visitor', {
    v_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    visitor_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    visitor_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    visitor_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    where_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'visitor'
  });
};

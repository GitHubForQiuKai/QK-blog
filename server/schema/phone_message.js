/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phone_message', {
    phone_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    phone_num: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    send_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'phone_message'
  });
};

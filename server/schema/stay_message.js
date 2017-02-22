/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stay_message', {
    stay_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    stay_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    message_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stay_user_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message_stay_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'stay_message'
  });
};

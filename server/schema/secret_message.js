/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('secret_message', {
    secret_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    send_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    receive_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    message_topic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message_content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'secret_message'
  });
};

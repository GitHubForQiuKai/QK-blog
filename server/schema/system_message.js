/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_message', {
    system_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    send_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    send_default: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    system_topic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    system_content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'system_message'
  });
};

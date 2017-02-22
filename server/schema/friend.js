/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('friend', {
    f_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    friend_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'friend'
  });
};

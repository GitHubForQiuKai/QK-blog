/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_comment', {
    c_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    commit_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    commit_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    commit_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    commit_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    commit_ip: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'user_comment'
  });
};

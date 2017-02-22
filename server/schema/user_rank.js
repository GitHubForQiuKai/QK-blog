/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_rank', {
    rank_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_rank_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    rank_mark: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    rank_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'user_rank'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photos', {
    photo_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    photo_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo_src: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    sort_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    upload_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    upload_ip: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'photos'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_pwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_phone: {
      type: DataTypes.INTEGER(12),
      allowNull: false
    },
    user_sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_qq: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_mark: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    user_rank_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    user_last_login_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_birthday: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    user_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_school: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_register_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    user_register_ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_last_update_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false
    },
    user_weibo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_blood_type: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    user_says: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_lock: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    user_freeze: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    user_power: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'user'
  });
};

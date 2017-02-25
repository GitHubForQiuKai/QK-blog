/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ad', {
    ad_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    position_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    media_type: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    ad_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ad_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ad_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false,
      defaultValue: "0"
    },
    end_time: {
      type: DataTypes.INTEGER(13),
      allowNull: false,
      defaultValue: "0"
    },
    link_man: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    link_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    click_count: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    enabled: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'ad'
  });
};

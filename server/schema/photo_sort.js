/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photo_sort', {
    sort_img_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sort_img_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sort_img_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    img_sort_question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img_sort_answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "1"
    },
    top_pic_src: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'photo_sort'
  });
};

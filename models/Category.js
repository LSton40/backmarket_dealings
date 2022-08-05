const { Model, DataTypes } = require('sequelize');
// const { DataTypes, DataTypes } = require('sequelize/types/index.js');
// const { DataTypes } = require('sequelize/types');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

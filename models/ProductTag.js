const { Model, DataTypes } = require('sequelize');
// const { DataTypes } = require('sequelize/types');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // product_id: {
    //   type: DataTypes.INTEGER,
    // },
    // tag_id: {
    //   type: DataTypes.INTEGER,
    // }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

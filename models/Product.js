const { Model, DataTypes } = require('sequelize');
// const { DataTypes, DataTypes, DataTypes } = require('sequelize/types');
// const { DataTypes } = require('sequelize/types');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      valdiate: {
        isNumeric: true
      }
    },
    // category_id: {
    //   type: DataTypes.INTEGER
    // }
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;

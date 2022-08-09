const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {foreignKey: 'category_id'});
Product.belongsTo(Category);

Product.belongsToMany(Tag, {through: ProductTag, foreignKey: 'product_id', otherKey: 'tag_id'});
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: 'tag_id', otherKey: 'product_id'});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

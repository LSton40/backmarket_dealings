const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint --starter comment

//Returns all products along with their associated categories and tags --LS comment
router.get('/', (req, res) => {
  Product.findAll({
    include: [Category, Tag]
   })
    .then((products) => {
      res.json(products)
    })
});

//Returns one product by its ID number, along with its associated categories and tags --LS comment
router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id, {
    include: [Category, Tag]
   })
    .then((product) => {
      res.json(product)
    })
});

//Create a new product by entering product name, price, stock, and any associated tag id numbers --LS comment
router.post('/', (req, res) => {
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,
    tag_id: req.body.tagIds
  })
  .then((product) => {
    // if there's product tags, we need to create pairings to bulk create in the ProductTag model --starter comment
    if (req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond --starter comment
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,
    tag_id: req.body.tagIds
  },
    {
      where: {
        id: req.params.id,
      }
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      // console.log(productTags);
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);
        console.log(productTagsToRemove);
      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value

  Product.destroy({
    where: {
      id: req.params.id
    }
   })
    .then((product) => {
      res.json('Product deleted!')
    })
});

module.exports = router;

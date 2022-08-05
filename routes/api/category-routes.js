const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include: Product
   })
    .then((products) => {
      res.json(products)
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  Category.findByPk(req.params.id, {
    include: Product
   })
    .then((product) => {
      res.json(product)
    })
});

router.post('/', (req, res) => {
  // create a new category

  Category.create({
    category_name: req.body.category_name
   })
    .then((new_category) => {
      res.json(new_category)
    })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update(req.body, {
    where: {
      id: req.params.id
    }
   })
    .then((category) => {
      res.json(category)
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  Category.destroy(req.body, {
    where: {
      id: req.params.id
    }
   })
    .then((category) => {
      res.json('Category deleted!')
    })
});

module.exports = router;

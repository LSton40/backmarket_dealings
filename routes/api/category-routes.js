const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
   })
    .then((products) => {
      res.json(products)
    })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: Product
   })
    .then((product) => {
      res.json(product)
    })
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
   })
    .then((new_category) => {
      res.json(new_category)
    })
});

router.put('/:id', (req, res) => {
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

  Category.destroy({
    where: {
      id: req.params.id
    }
   })
    .then((category) => {
      res.json('Category deleted!')
    })
});

module.exports = router;

const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//GET route to find all Categories, including the associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: Product
   })
    .then((products) => {
      res.json(products)
    })
});

//GET route to find a Category by ID, including the associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: Product
   })
    .then((product) => {
      res.json(product)
    })
});

//POST route to create a new Category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
   })
    .then((new_category) => {
      res.json(new_category)
    })
});

//PUT route to update an existing Category
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

//DELETE route to delete an existing Category
router.delete('/:id', (req, res) => {
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

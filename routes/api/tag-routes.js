const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//GET route to find all Tags, including the associated Products
router.get('/', (req, res) => {
   Tag.findAll({
    include: Product
   })
    .then((tags) => {
      console.log(tags);
      res.json(tags)
    })
});

//GET route to find a Tag by ID, including the associated Products
router.get('/:id', (req, res) => {
   Tag.findByPk(req.params.id, {
    include: Product
   })
    .then((tag) => {
      res.json(tag)
    })
});

//POST route to create a new Tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
   })
    .then((new_tag) => {
      res.json(new_tag)
    })
});

//PUT route to update an existing Tag
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
   })
    .then((tag) => {
      res.json(tag)
    })
});

//DELETE route to delete an existing Tag
router.delete('/:id', (req, res) => {
   Tag.destroy({
    where: {
      id: req.params.id
    }
   })
    .then((tag) => {
      res.json('Tag deleted!')
    })
});

module.exports = router;

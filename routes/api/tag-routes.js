const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
   Tag.findAll({
    include: Product
   })
    .then((tags) => {
      console.log(tags);
      res.json(tags)
    })
});

router.get('/:id', (req, res) => {
   Tag.findByPk(req.params.id, {
    include: Product
   })
    .then((tag) => {
      res.json(tag)
    })
});

router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
   })
    .then((new_tag) => {
      res.json(new_tag)
    })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

   Tag.update(req.body, {
    where: {
      id: req.params.id
    }
   })
    .then((tag) => {
      res.json(tag)
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value

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

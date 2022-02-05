const express = require('express');
const CategoriesService = require('../services/CategoriesService');

const router = express.Router();

router.post('/', async (req, res) => {
  const categoryCreated = await CategoriesService.create(req);
  if (categoryCreated.code) { 
    return res.status(categoryCreated.code).json({ message: categoryCreated.message }); 
}
  res.status(201).json(categoryCreated);
});

router.get('/', async (req, res) => {
  const categoryCreated = await CategoriesService.findAll(req);
  if (categoryCreated.code) { 
    return res.status(categoryCreated.code).json({ message: categoryCreated.message }); 
}
  res.status(200).json(categoryCreated);
});

  module.exports = router;
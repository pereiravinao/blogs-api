const express = require('express');
const BlogPostsService = require('../services/BlogPostsService');

const router = express.Router();

router.post('/', async (req, res) => {
  const postCreated = await BlogPostsService.create(req);
  if (postCreated.code) { 
    return res.status(postCreated.code).json({ message: postCreated.message }); 
}
  res.status(201).json(postCreated);
});

router.get('/:id', async (req, res) => {
  const postCreated = await BlogPostsService.getById(req);
  if (postCreated.code) { 
    return res.status(postCreated.code).json({ message: postCreated.message }); 
}
  res.status(200).json(postCreated);
});

router.get('/', async (req, res) => {
  const postCreated = await BlogPostsService.listAll(req);
  if (postCreated.code) { 
    return res.status(postCreated.code).json({ message: postCreated.message }); 
}
  res.status(200).json(postCreated);
});

router.put('/:id', async (req, res) => {
  const postCreated = await BlogPostsService.update(req);
  if (postCreated.code) { 
    return res.status(postCreated.code).json({ message: postCreated.message }); 
}
  res.status(200).json(postCreated);
});

  module.exports = router;
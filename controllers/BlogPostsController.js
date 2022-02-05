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

  module.exports = router;
const express = require('express');
const UserService = require('../services/UserService');

const router = express.Router();

router.post('/', async (req, res) => {
  const userCreated = await UserService.create(req.body);
  if (userCreated.code) { 
    return res.status(userCreated.code).json({ message: userCreated.message }); 
}
  res.status(201).json(userCreated);
});

  module.exports = router;
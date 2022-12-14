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

router.get('/', async (req, res) => {
  const { authorization } = req.headers;
  const getUsers = await UserService.find(authorization);
  if (getUsers.code) { 
    return res.status(getUsers.code).json({ message: getUsers.message }); 
}
  res.status(200).json(getUsers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const getUsers = await UserService.findById(id, authorization);
  if (getUsers.code) { 
    return res.status(getUsers.code).json({ message: getUsers.message }); 
}
  res.status(200).json(getUsers);
});

  module.exports = router;
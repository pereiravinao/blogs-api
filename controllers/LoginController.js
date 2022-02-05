const express = require('express');
const LoginService = require('../services/LoginService');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const verifyLogin = await LoginService.verify(email, password);
  if (verifyLogin.code) { 
    return res.status(verifyLogin.code).json({ message: verifyLogin.message }); 
}
  res.status(200).json({ token: verifyLogin });
});

  module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const CategoriesController = require('./controllers/CategoriesController');
const BlogPostsController = require('./controllers/BlogPostsController');

const app = express();

app.use(bodyParser.json());

app.use('/user', UserController);
app.use('/login', LoginController);
app.use('/categories', CategoriesController);
app.use('/post', BlogPostsController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

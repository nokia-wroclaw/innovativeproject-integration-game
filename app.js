const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'POST: \n/api/categories - post new category\n/api/categories/:categoryId/people - post new character in category with <:categoryId> id\n\n'
  ,message: 'GET: \n/api/categories - list all categories\n/api/categories/:categoryId - retrieve one category (with all people belonging to it) with <:categoryId> id\n'
  ,message: '/api/categories/random/size/:size/id/:id - retrieve <:size> number of category with <:id> id\n',
  message: '/api/people - list all people\n/api/people/:peopleId - retrieve one character with <:peopleId> id',
  message: '\n\nPUT:\n/api/categories/:categoryId - update category with <:categoryId> id\n',
  message: '/api/categories/:categoryId/people/:peopleId - update character with <:peopleId> id inside category with <:categoryId> id',
  message: '\n\nDELETE\n/api/categories/:categoryId - delete category with <:categoryId> id\n/api/categories/:categoryId/people/:peopleId - delete character with <:peopleId> id belonging to category with <:categoryId> id'
}));

module.exports = app;

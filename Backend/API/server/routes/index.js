const categoriesController = require('../controllers').categories;
const peopleController = require('../controllers').people;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to API!',
  }));

  app.post('/api/categories', categoriesController.create);
  app.get('/api/categories', categoriesController.list);
  app.get('/api/categories/:categoryId', categoriesController.retrieve);
  app.put('/api/categories/:categoryId', categoriesController.update);
  app.delete('/api/categories/:categoryId', categoriesController.destroy);

app.get('/api/people', peopleController.list);
app.post('/api/categories/:categoryId/people', peopleController.create);
  app.put('/api/categories/:categoryId/people/:peopleId', peopleController.update);
  app.delete(
    '/api/categories/:categoryId/people/:peopleId', peopleController.destroy
  );

/*
  app.all('/api/categories/:categoryId/people', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));*/
};

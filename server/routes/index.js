const categoriesController = require('../controllers').categories;
const peopleController = require('../controllers').people;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to API!',
  }));

  app.post('/api/categories', categoriesController.create);
  app.get('/api/categories', categoriesController.list);
  app.get('/api/categories/:categoryId', categoriesController.retrieve);
  app.get('/api/categories/random/size/:size/id/:id', categoriesController.randList);
  app.put('/api/categories/:categoryId', categoriesController.update);
  app.delete('/api/categories/:categoryId', categoriesController.destroy);
//api/categories?id=1&id2&size=40
//ogolnie ma byc przesylane kilka kategorii i z wszystkich wylosowac dana ilsoc
//moze walidacje np zrobic tak : Array.isArray(id)?id:[id]
app.get('/api/people', peopleController.list);
app.get('/api/people/:peopleId', peopleController.retrieve)
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

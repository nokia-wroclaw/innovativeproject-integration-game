const Category = require('../models').category;
const People = require('../models').people;
const Sequelize = require('../models/index').sequelize;



module.exports = {
  create(req, res) {
    
    return Category
      .create({
        
          name: req.body.name,
      })
      .then((category) => res.status(201).send(category))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Category
      .findAll({
        include: [{
          model: People,
          as: 'people',
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: People, as: 'people' }, 'createdAt', 'ASC'],
        ],
      })
      .then((categories) => res.status(200).send(categories))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {

    return Category
      .findById(req.params.categoryId, {
        include: [{
          model: People,
          as: 'people',
        }],
      })
      .then((category) => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return res.status(200).send(category);
      })
      .catch((error) => res.status(400).send(error));
  },

  randList(req, res) {
    return Category
    .findAll( {
      include: [{
        model: People,
      //  limit: req.params.size
      }],
     /* order:[
        [ Sequelize.random()],
      ], */
      
    })
    .then((categories) => res.status(200).send(categories))
    .catch((error) => res.status(400).send(error));
  },


  update(req, res) {
    return Category
      .findById(req.params.categoryId, {
        include: [{
          model: People,
          as: 'people',
        }],
      })
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return category
          .update({
            name: req.body.name || category.name,
          })
          .then(() => res.status(200).send(category))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Category
      .findById(req.params.categoryId)
      .then(category => {
        if (!category) {
          return res.status(400).send({
            message: 'Category Not Found',
          });
        }
        return category
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};

function splitter(array)
{
  var i = array.split(",").parseInt;
  return i;
}
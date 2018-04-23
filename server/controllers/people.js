const Category = require('../models').category;
const People = require('../models').people;


module.exports = {
  create(req, res) {
    
    return People
      .create({
        
          name: req.body.name,
          surname: req.body.surname,
          nickname: req.body.nickname,
          categoryId: req.params.categoryId

      })
      .then((people) => res.status(201).send(people))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return People
      .findAll({
        order: [
          ['id', 'DESC'],
        ],
      })
      .then((people) => res.status(200).send(people))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {
    return People
      .findById(req.params.peopleId, {
      })
      .then((people) => {
        if (!people) {
          return res.status(404).send({
            message: 'Person Not Found',
          });
        }
        return res.status(200).send(people);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return People
      .find({
        where: {
          id: req.params.peopleId,
          categoryId: req.params.categoryId,
        },
      })
      .then(people => {
        if (!people) {
          return res.status(404).send({
            message: 'Person Not Found',
          });
        }

        return people
          .update({
            name: req.body.name || people.name,
            surname: req.body.surname || people.surname,
            nickname: req.body.nickname || people.nickname,
            description: req.body.description || people.description
            
          })
          .then(updatedPeople => res.status(200).send(updatedPeople))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return People
      .find({
        where: {
          id: req.params.peopleId,
          categoryId: req.params.categoryId,
        },
      })
      .then(people => {
        if (!people) {
          return res.status(404).send({
            message: 'Person Not Found',
          });
        }

        return people
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
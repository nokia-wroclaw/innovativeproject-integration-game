const Category = require('../models').category;
const People = require('../models').people;
const Sequelize = require('../models/index').sequelize;
const Preset = require('../models').preset;



module.exports = {
  create(req, res) {
    
    return Preset
      .create({
          name: req.body.name,
          isDefault: req.body.isDefault
      })
      .then((preset) => res.status(201).send(preset))
      .catch((error) => res.status(400).send(error));
  },


  listPresetWithCat(req, res) {
    return Preset
    .findAll({
      include: [{
        model: Category,
        as: 'categories',
      }],
      order: [
        ['createdAt', 'ASC'],
        [{ model: Category, as: 'categories' }, 'createdAt', 'ASC'],
      ],
    })
    .then((presets) => res.status(200).send(presets))
    .catch((error) => res.status(400).send(error));
  },

  listPresetWithAll(req, res) {
    return Preset
    .findAll({
      include: [{
        all: true,
        nested: true
      },
      
    ],
      order: [
        ['createdAt', 'ASC'],
        [{ model: Category, as: 'categories' }, 'createdAt', 'ASC'],
        [{model: People, as: 'people'}, 'createdAt', 'ASC']
      ],
    })
    .then((presets) => res.status(200).send(presets))
    .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Preset
      .findAll()
      .then((presets) => res.status(200).send(presets))
      .catch((error) => res.status(400).send(error));
  },

  retrieve(req, res) {

    return Preset
      .findById(req.params.presetId, {
        include: [{
          model: Category,
          as: 'categories',
        }],
      })
      .then((preset) => {
        if (!preset) {
          return res.status(404).send({
            message: 'Category Not Found',
          });
        }
        return res.status(200).send(preset);
      })
      .catch((error) => res.status(400).send(error));
  },



  update(req, res) {
    return Preset
      .findById(req.params.presetId, {
        include: [{
          model: Category,
          as: 'categories',
        }],
      })
      .then(preset => {
        if (!preset) {
          return res.status(404).send({
            message: 'Preset Not Found',
          });
        }
        return preset
          .update({
            name: req.body.name || preset.name,
          })
          .then(() => res.status(200).send(preset))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Preset
      .findById(req.params.presetId)
      .then(preset => {
        if (!preset) {
          return res.status(400).send({
            message: 'Preset Not Found',
          });
        }
        return preset
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};


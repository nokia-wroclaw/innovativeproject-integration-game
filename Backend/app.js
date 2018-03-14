 var pg = require('pg');
 pg.defaults.ssl = true;

const env = require('env2')('env.json');

 const Sequelize = require('sequelize');
 const sequelize = new Sequelize(process.env.DB_BASE, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false
 });

 sequelize.authenticate().then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log("ERROR");
    })
    .done();

    const People = sequelize.define('people', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    surname: {
        type: Sequelize.STRING,
        field: 'surname'
    },
    nickname: {
        type: Sequelize.STRING,
        field: 'nickname'
    }
  }, {
    timestamps: false
  });

  const Category = sequelize.define('category', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }
  }, {
    timestamps: false
  });

  //TABLE WHICH JOIN PEOPLE AND CATEGORY
  const People_Category = sequelize.define('people_category', {
    id_people: {
        type: Sequelize.INTEGER,
        field: 'id_people',
        primaryKey: true
    },
    id_category: {
        type: Sequelize.INTEGER,
        field: 'id_category',
        primaryKey: true
    }
  }
    , {
    timestamps: false
  });

  //foreignKey
  People_Category.belongsTo(People, {foreignKey: 'id_people', targetKey: 'id'});
  People_Category.belongsTo(Category, {foreignKey: 'id_category', targetKey: 'id'});

  //Create new People
  sequelize.sync()
    .then(() => People.create({
      id: 1,
      name: 'Robert',
      surname: 'Lewandowski'
    }))

    sequelize.sync()
      .then(() => Category.create({
        id: 1,
        name: 'Sports_people'
      }))

      sequelize.sync()
        .then(() => People_Category.create({
          id_people: 1,
          id_category: 1
        }))

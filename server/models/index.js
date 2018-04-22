const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
var pg = require('pg');
pg.defaults.ssl = true;
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};

let sequelize;

//if(config.db_URL) sequelize =new Sequelize(config.db_URL, {omitNull: true});
 
  sequelize = new Sequelize(
    config.database, config.username, config.password,  {host: config.host, dialect: config.dialect, ssl: true}, {omitNull: true}
  )
/*
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_CONCENTRIC_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     5000,
  //  host:      localhost,
    logging:  true //false
  })
*/


fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
var pg = require('pg');
pg.defaults.ssl = true;
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/config.json`)[env];
const category=require('./models').category;
const people=require('./models').people;


let sequelize;

  sequelize = new Sequelize(
    config.database, config.username, config.password, config,{host: config.host, dialect: config.dialect, ssl: true}, {omitNull: true}
  )

function insertCategory() {
var fsCategory = require("fs");
var contentsCategory = fsCategory.readFileSync("category.json");
var jsonContentCategory = JSON.parse(contentsCategory);


    for (var i = 1; i < jsonContentCategory.category.length; i++) {
        category.create({
            name: jsonContentCategory.category[i].name,
            presetId: 1

        })
    }
}

function insertPeople() {
    var fsPeople = require("fs");
    var contentsPeople = fsPeople.readFileSync("people.json");
    var jsonContentPeople = JSON.parse(contentsPeople);
//jsonContentPeople.people.length
    for (var i = 81; i < 120; i++) {
        people.create({
            
            name: jsonContentPeople.people[i].name,
            surname: jsonContentPeople.people[i].surname,
            nickname: jsonContentPeople.people[i].nickname,
            categoryId: 1,
            description: jsonContentPeople.people[i].description
        })
    }
}
sequelize.sync()
.then(()=>insertCategory())
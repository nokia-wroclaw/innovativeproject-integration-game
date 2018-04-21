const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/config.json`)[env];
const category=require('./models').category;
const people=require('./models').people;


let sequelize;
if(config.db_URL) sequelize =new Sequelize(config.db_URL, {omitNull: true});
 else{
  sequelize = new Sequelize(
    config.database, config.username, config.password, config, {omitNull: true}
  );}

function insertCategory() {
var fsCategory = require("fs");
var contentsCategory = fsCategory.readFileSync("category.json");
var jsonContentCategory = JSON.parse(contentsCategory);


    for (var i = 0; i < jsonContentCategory.category.length; i++) {
        category.create({
            name: jsonContentCategory.category[i].name

        })
    }
}

function insertPeople() {
    var fsPeople = require("fs");
    var contentsPeople = fsPeople.readFileSync("people.json");
    var jsonContentPeople = JSON.parse(contentsPeople);

    for (var i = 0; i < jsonContentPeople.people.length; i++) {
        people.create({
            
            name: jsonContentPeople.people[i].name,
            surname: jsonContentPeople.people[i].surname,
            nickname: jsonContentPeople.people[i].nickname,
            categoryId: (i%4+1),
            description: jsonContentPeople.people[i].description
        })
    }
}
sequelize.sync()
.then(()=>insertCategory())
.then(()=>insertPeople())
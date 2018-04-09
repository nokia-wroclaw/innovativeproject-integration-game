const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
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

//var DataTypes = require('sequelize/lib/data-types');

const people = sequelize.define('people', {
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

const category = sequelize.define('category', {
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


const peopleCategory = sequelize.define('peopleCategory', {
    idPeople: {
        type: Sequelize.INTEGER,
        field: 'idPeople',
        primaryKey: true
    },
    idCategory: {
        type: Sequelize.INTEGER,
        field: 'idCategory',
        primaryKey: true
    }
}, {
    timestamps: false
});

//foreignKey
peopleCategory.belongsTo(people, {
    foreignKey: 'idPeople',
    targetKey: 'id'
});
peopleCategory.belongsTo(category, {
    foreignKey: 'idCategory',
    targetKey: 'id'
});

sequelize.sync()
    .then(() => peopleCategory.destroy({
        where: {},
        truncate: {
            cascade: true
        }
    }))
    .then(() => category.destroy({
        where: {},
        truncate: {
            cascade: true
        }
    }))
    .then(() => people.destroy({
        where: {},
        truncate: {
            cascade: true
        }
    }))
    .then(() => insertPeople())
    .then(() => insertCategory())
    .then(() => insertPeopleCategory())

function insertPeople() {
    var fsPeople = require("fs");
    var contentsPeople = fsPeople.readFileSync("people.json");
    var jsonContentPeople = JSON.parse(contentsPeople);

    for (var i = 0; i < jsonContentPeople.people.length; i++) {
        people.create({
            id: jsonContentPeople.people[i].id,
            name: jsonContentPeople.people[i].name,
            surname: jsonContentPeople.people[i].surname,
            nickname: jsonContentPeople.people[i].nickname

        })
    }

}

function insertCategory() {
var fsCategory = require("fs");
var contentsCategory = fsCategory.readFileSync("category.json");
var jsonContentCategory = JSON.parse(contentsCategory);


    for (var i = 0; i < jsonContentCategory.category.length; i++) {
        category.create({
            id: jsonContentCategory.category[i].id,
            name: jsonContentCategory.category[i].name

        })
    }
}

function insertPeopleCategory() {
var fsPeopleCategory = require("fs");
var contentsPeopleCategory = fsPeopleCategory.readFileSync("peopleCategory.json");
var jsonContentPeopleCategory = JSON.parse(contentsPeopleCategory);


    for (var i = 0; i < jsonContentPeopleCategory.peopleCategory.length; i++) {
        peopleCategory.create({
            idPeople: jsonContentPeopleCategory.peopleCategory[i].idPeople,
            idCategory: jsonContentPeopleCategory.peopleCategory[i].idCategory

        })
    }
}

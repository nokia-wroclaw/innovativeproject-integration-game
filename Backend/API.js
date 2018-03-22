'use strict';

const db = require ('./data.json');

const Joi = require('joi');

const Hapi = require('hapi');

var i=0;
var j=0;

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

function listCharactersById(db){
  i,j=0;
  
  for (i in db.characters)
  { 
  for (j in db.characters[i].id)
    {
    console.log("\nId: " + db.characters[i].id +
    "\nName: " + db.characters[i].name +
    "\nSurname: " + db.characters[i].surname +
    "\nCategory: " + db.characters[i].category);
    }
  }
}

function getCharacterById (db, reqId)
{
      i=0;
    for (i in db.characters)
  {
        if(db.characters[i].id == reqId)
        console.log(
          "\nMatch found: \nId: " + reqId + "\nName: " + db.characters[i].name +"\nSurname: " + db.characters[i].surname
        );
         else console.log("\nNo match found");
  }
}

function createNewCharacter (db)
{
  
  var lowestUnusedId = 1;
  for(i = 0 ; i< db.characters.length ; i++)
  {
    if(lowestUnusedId==db.characters[i].id) 
    lowestUnusedId++;
    else continue;
  }
  
  db.characters.push({id: lowestUnusedId, name: "Example", surname: "Exampelsky", category: "Fictional"});
}

function deleteCharacterById(db,reqId)
{
  db.characters.splice(reqId-1, 1);
}

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    
     listCharactersById(db);
      return null;
  }});

server.route({
  method: 'GET',
  path: '/search/{id}',
  handler: (request, h) => {
  getCharacterById(db,request.params.id);
  return null;
  }
});
server.route({
  method: 'POST',
  path: '/characters',
  handler: (request, h) => {
  createNewCharacter(db);
  return null;
  }
});

server.route({
  method: 'DELETE',
  path: '/characters/{id}',
  handler: (request, h) => {
  deleteCharacterById(db,request.params.id);
  return null;
  }
});


const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
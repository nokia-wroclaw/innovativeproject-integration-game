
// API.js

'use strict';
const Hapi = require('hapi');
const Joi = require('joi');
const conString=require("./conString.json");

const server = new Hapi.Server({
    port: 3000,
    host: 'localhost'
  });

server.register({ 
  register: require('hapi-plugin-pg'),
   options: { 
    connectionString: conString.conString,
    
       
  }
  
}, (err) => { 
  if (err) { 
    throw err; 
  }
  pg.client.ssl=true;
});
server.route({ 
  method: 'GET',
   path: '/',
   handler: function (request, reply) { 
    
    request.pg.client.query("SELECT * FROM people", (err, result) => { 
      if (err) { 
        return reply(err).code(500); 
      } 
      if (!result ||  !result.rows || result.rows.length === 0) { 
        return reply({
          body: 'Not Found'
        }).code(404); 
      } 
      return reply(result.rows); 
    }); 
  },
   
});
/*server.route({ 
  method: 'GET',
   path: '/{id}',
   handler: function (request, reply) { 
    const id = request.params.id; 
    request.pg.client.query("SELECT * FROM people where id = $1", [id], (err, result) => { 
      if (err) { 
        return reply(err).code(500); 
      } 
      if (!result ||  !result.rows || result.rows.length === 0) { 
        return reply({
          body: 'Not Found'
        }).code(404); 
      } 
      return reply(result.rows); 
    }); 
  },
   config: { 
    validate: { 
      params: Joi.object({ 
        id: Joi.number().integer().required() 
      }) 
    } 
  }
});*/
(async () => {
    try {  
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {  
      console.log(err)
    }
  })();
  



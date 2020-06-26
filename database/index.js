const options =
  process.env.NODE_ENV === 'production'
    ? {
        client: 'pg',
        connection: {
          host: 'localhost',
          database: 'todo_db',
        },
      }
    : {
        client: 'pg',
        connection: {
          host: 'localhost',
          database: 'todo_db',
        },
      };

const knex = require('knex')(options);

module.exports = knex;

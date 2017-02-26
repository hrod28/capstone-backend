'use strict';
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'festival'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

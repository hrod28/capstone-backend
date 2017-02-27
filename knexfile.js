'use strict';
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'newfestival'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};

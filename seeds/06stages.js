'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stages').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('stages').insert({
          id: 1
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM stages))");
      })
    ]);
  });
};

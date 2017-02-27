'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workshops').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('workshops').insert({
          id: 1
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM workshops))");
      })
    ]);
  });
};

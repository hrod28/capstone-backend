'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          name: 'Heidi Rodriguez',
          username: 'hrod28',
          password: 'chewey28',
          email: 'hrod2645@gmail.com',
          location: 'Fort Collins, CO',
          about: 'FESTY!!',
          is_admin: true
        }),
        knex('users').insert({
          id: 2,
          name: 'Matthew Ellison',
          username: 'googie',
          password: 'cleo',
          email: '',
          location: 'Fort Collins, CO',
          about: 'The Best!',
          is_admin: true
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};

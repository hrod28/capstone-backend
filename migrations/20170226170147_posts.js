'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};

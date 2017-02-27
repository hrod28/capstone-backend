'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('workshops', (table) => {
    table.increments();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workshops');
};

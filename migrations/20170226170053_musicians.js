'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('musicians', (table) => {
    table.increments();
  
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('musicians');
};

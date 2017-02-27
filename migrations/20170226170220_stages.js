'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('stages', (table) => {
    table.increments();
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stages');
};

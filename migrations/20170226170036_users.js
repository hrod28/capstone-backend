'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('username').notNullable().unique()
    table.string('password').notNullable();
    table.string('email').notNullable();
    table.string('location').notNullable();
    table.text('about').defaultTo('');
    table.boolean('is_admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

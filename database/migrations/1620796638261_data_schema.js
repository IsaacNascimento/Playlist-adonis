'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DataSchema extends Schema {
  up () {
    this.create('data', (table) => {
      table.increments()
      table.string('hora', 100).notNullable()
      table.string('semana', 100).notNullable()
      table.integer('despertador_id').references('id').inTable('despertadores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('data')
  }
}

module.exports = DataSchema

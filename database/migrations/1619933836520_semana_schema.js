'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SemanaSchema extends Schema {
  up () {
    this.create('semanas', (table) => {
      table.increments()
      table.date('dia').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('semanas')
  }
}

module.exports = SemanaSchema

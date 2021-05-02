'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstiloSchema extends Schema {
  up () {
    this.create('estilos', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estilos')
  }
}

module.exports = EstiloSchema

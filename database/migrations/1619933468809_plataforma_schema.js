'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlataformaSchema extends Schema {
  up () {
    this.create('plataformas', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('plataformas')
  }
}

module.exports = PlataformaSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicaSchema extends Schema {
  up () {
    this.create('musicas', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('estilo_id').references('id').inTable('estilos').unsigned().notNullable()
      table.integer('autor_id').references('id').inTable('autores').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('musicas')
  }
}

module.exports = MusicaSchema

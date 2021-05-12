'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorMusicaSchema extends Schema {
  up () {
    this.create('autor_musicas', (table) => {
      table.increments()
      table.integer('musica_id').references('id').inTable('musicas').unsigned().notNullable()
      table.integer('autor_id').references('id').inTable('autores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('autor_musicas')
  }
}

module.exports = AutorMusicaSchema

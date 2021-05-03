'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelacionamentoSchema extends Schema {
  up () {
    this.create('relacionamentos', (table) => {
      table.increments()
      table.integer('usuario_playlist_id').references('id').inTable('usuario_playlists').unsigned().notNullable()
      table.integer('usuario_despertador_id').references('id').inTable('usuario_despertadores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('relacionamentos')
  }
}

module.exports = RelacionamentoSchema

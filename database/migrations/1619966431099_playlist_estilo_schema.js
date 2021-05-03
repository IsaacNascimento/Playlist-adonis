'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistEstiloSchema extends Schema {
  up () {
    this.create('playlist_estilos', (table) => {
      table.increments()
      table.integer('playlist_id').references('id').inTable('playlists').unsigned().notNullable()
      table.integer('estilo_id').references('id').inTable('estilos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlist_estilos')
  }
}

module.exports = PlaylistEstiloSchema

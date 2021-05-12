'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistMusicaSchema extends Schema {
  up () {
    this.create('playlist_musicas', (table) => {
      table.increments()
      table.integer('musica_id').references('id').inTable('musicas').unsigned().notNullable()
      table.integer('playlist_id').references('id').inTable('playlists').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlist_musicas')
  }
}

module.exports = PlaylistMusicaSchema

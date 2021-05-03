'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistPlataformaSchema extends Schema {
  up () {
    this.create('playlist_plataformas', (table) => {
      table.increments()
      table.integer('playlist_id').references('id').inTable('playlists').unsigned().notNullable()
      table.integer('plataforma_id').references('id').inTable('plataformas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlist_plataformas')
  }
}

module.exports = PlaylistPlataformaSchema

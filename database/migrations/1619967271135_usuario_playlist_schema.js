'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioPlaylistSchema extends Schema {
  up () {
    this.create('usuario_playlists', (table) => {
      table.increments()
      table.integer('usuario_id').references('id').inTable('usuarios').unsigned().notNullable()
      table.integer('playlist_estilo_plataforma_id').references('id').inTable('playlist_estilo_plataformas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario_playlists')
  }
}

module.exports = UsuarioPlaylistSchema

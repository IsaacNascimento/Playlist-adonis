'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistSchema extends Schema {
  up () {
    this.create('playlists', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('usuario_id').references('id').inTable('usuarios').unsigned().notNullable()
      table.integer('plataforma_id').references('id').inTable('plataformas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlists')
  }
}

module.exports = PlaylistSchema

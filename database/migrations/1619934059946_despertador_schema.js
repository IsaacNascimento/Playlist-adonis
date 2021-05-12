'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DespertadorSchema extends Schema {
  up () {
    this.create('despertadores', (table) => {
      table.increments()
      table.string('titulo', 100).notNullable()
      table.integer('usuario_id').references('id').inTable('usuarios').unsigned().notNullable()
      table.integer('playlist_id').references('id').inTable('playlists').unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('despertadores')
  }
}

module.exports = DespertadorSchema

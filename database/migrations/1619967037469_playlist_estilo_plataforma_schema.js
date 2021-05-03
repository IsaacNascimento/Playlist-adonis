'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlaylistEstiloPlataformaSchema extends Schema {
  up () {
    this.create('playlist_estilo_plataformas', (table) => {
      table.increments()
      table.integer('playlist_estilo_id').references('id').inTable('playlist_estilos').unsigned().notNullable()
      table.integer('playlist_plataforma_id').references('id').inTable('playlist_plataformas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('playlist_estilo_plataformas')
  }
}

module.exports = PlaylistEstiloPlataformaSchema

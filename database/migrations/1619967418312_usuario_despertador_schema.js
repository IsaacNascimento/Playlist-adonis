'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioDespertadorSchema extends Schema {
  up () {
    this.create('usuario_despertadores', (table) => {
      table.increments()
      table.integer('usuario_id').references('id').inTable('usuarios').unsigned().notNullable()
      table.integer('despertador_id').references('id').inTable('despertadores').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('usuario_despertadores')
  }
}

module.exports = UsuarioDespertadorSchema

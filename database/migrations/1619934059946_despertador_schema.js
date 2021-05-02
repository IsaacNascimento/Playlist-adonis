'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DespertadorSchema extends Schema {
  up () {
    this.create('despertadors', (table) => {
      table.increments()
      table.integer('semana_id').references('id').inTable('semanas').unsigned().notNullable()
      table.integer('horario_id').references('id').inTable('horarios').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('despertadores')
  }
}

module.exports = DespertadorSchema

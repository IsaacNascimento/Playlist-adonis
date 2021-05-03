'use strict'

/*
|--------------------------------------------------------------------------
| DespertadorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Despertador = use('App/Models/Despertador')

class DespertadorSeeder {
  async run () {
    await Despertador.createMany([
      {id: 1, semana_id: 1, horario_id: 1},
      {id: 2, semana_id: 2, horario_id: 2},
      {id: 3, semana_id: 3, horario_id: 3},
      {id: 4, semana_id: 4, horario_id: 4},
      {id: 5, semana_id: 5, horario_id: 5},
      {id: 6, semana_id: 6, horario_id: 6},
    ])
  }
}

module.exports = DespertadorSeeder

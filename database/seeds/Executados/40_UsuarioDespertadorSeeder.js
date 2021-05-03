'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioDespertadorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const UsuarioDespertador = use('App/Models/UsuarioDespertador')

class UsuarioDespertadorSeeder {
  async run () {
    await UsuarioDespertador.createMany([
      {id: 1, usuario_id: 1, despertador_id: 1},
      {id: 2, usuario_id: 1, despertador_id: 2},
      {id: 3, usuario_id: 2, despertador_id: 3},
      {id: 4, usuario_id: 2, despertador_id: 4},
      {id: 5, usuario_id: 3, despertador_id: 5},
      {id: 6, usuario_id: 4, despertador_id: 6},
    ])
  }
}

module.exports = UsuarioDespertadorSeeder

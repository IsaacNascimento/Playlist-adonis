'use strict'

/*
|--------------------------------------------------------------------------
| RelacionamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Relacionamento = use('App/Models/Relacionamento')

class RelacionamentoSeeder {
  async run () {
    await Relacionamento.createMany([
      {id: 1, usuario_playlist_id: 1, usuario_despertador_id: 1},
      {id: 2, usuario_playlist_id: 1, usuario_despertador_id: 2},
      {id: 3, usuario_playlist_id: 2, usuario_despertador_id: 3},
      {id: 4, usuario_playlist_id: 2, usuario_despertador_id: 4},
      {id: 5, usuario_playlist_id: 3, usuario_despertador_id: 5},
      {id: 6, usuario_playlist_id: 4, usuario_despertador_id: 6},
    ])
  }
}

module.exports = RelacionamentoSeeder

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
      {id: 1, titulo: 'Acordar'        ,usuario_id: 1, playlist_id: 1},
      {id: 2, titulo: 'Malhar'         ,usuario_id: 1, playlist_id: 1},
      {id: 3, titulo: 'Estudar'        ,usuario_id: 2, playlist_id: 2},
      {id: 4, titulo: 'Limpar a casa'  ,usuario_id: 2, playlist_id: 2},
      {id: 5, titulo: 'Correr'         ,usuario_id: 3, playlist_id: 3},
      {id: 6, titulo: 'Churrasco'      ,usuario_id: 4, playlist_id: 4},
    ])
  }
}

module.exports = DespertadorSeeder

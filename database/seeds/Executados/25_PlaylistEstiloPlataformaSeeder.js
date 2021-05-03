'use strict'

/*
|--------------------------------------------------------------------------
| PlaylistEstiloPlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const PlaylistEstiloPlataforma = use('App/Models/PlaylistEstiloPlataforma')

class PlaylistEstiloPlataformaSeeder {
  async run () {
    await PlaylistEstiloPlataforma.createMany([
      {id: 1, playlist_estilo_id: 1, playlist_plataforma_id: 1},
      {id: 2, playlist_estilo_id: 2, playlist_plataforma_id: 2},
      {id: 3, playlist_estilo_id: 3, playlist_plataforma_id: 3},
      {id: 4, playlist_estilo_id: 4, playlist_plataforma_id: 4},
      {id: 5, playlist_estilo_id: 5, playlist_plataforma_id: 5},
      {id: 6, playlist_estilo_id: 6, playlist_plataforma_id: 6},
    ])
  }
}

module.exports = PlaylistEstiloPlataformaSeeder

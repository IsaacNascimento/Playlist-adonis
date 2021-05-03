'use strict'

/*
|--------------------------------------------------------------------------
| PlaylistPlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const PlaylistPlataforma = use('App/Models/PlaylistPlataforma')

class PlaylistPlataformaSeeder {
  async run () {
    await PlaylistPlataforma.createMany([
      {id: 1, playlist_id: 1, plataforma_id: 1},
      {id: 2, playlist_id: 1, plataforma_id: 1},
      {id: 3, playlist_id: 2, plataforma_id: 1},
      {id: 4, playlist_id: 2, plataforma_id: 1},
      {id: 5, playlist_id: 3, plataforma_id: 2},
      {id: 6, playlist_id: 4, plataforma_id: 4},
    ])
  }
}

module.exports = PlaylistPlataformaSeeder

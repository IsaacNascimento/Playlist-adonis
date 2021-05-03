'use strict'

/*
|--------------------------------------------------------------------------
| PlaylistEstiloSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const PlaylistEstilo = use('App/Models/PlaylistEstilo')

class PlaylistEstiloSeeder {
  async run () {
    await PlaylistEstilo.createMany([
      {id: 1, playlist_id: 1, estilo_id: 1},
      {id: 2, playlist_id: 1, estilo_id: 5},
      {id: 3, playlist_id: 2, estilo_id: 4},
      {id: 4, playlist_id: 2, estilo_id: 2},
      {id: 5, playlist_id: 3, estilo_id: 3},
      {id: 6, playlist_id: 4, estilo_id: 6},

    ])
 
  }
}

module.exports = PlaylistEstiloSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| PlaylistMusicaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const PlaylistMusica = use('App/Models/PlaylistMusica')

class PlaylistMusicaSeeder {
  async run () {
    await PlaylistMusica.createMany([
      {id: 1,  musica_id: 1,  playlist_id: 1 },
      {id: 2,  musica_id: 2,  playlist_id: 1 },
      {id: 3,  musica_id: 3,  playlist_id: 2 },
      {id: 4,  musica_id: 4,  playlist_id: 2 },
      {id: 5,  musica_id: 5,  playlist_id: 3 },
      {id: 6,  musica_id: 6,  playlist_id: 3 },
      {id: 7,  musica_id: 7,  playlist_id: 4 },
      {id: 8,  musica_id: 8,  playlist_id: 4 },
    ])
  }
}

module.exports = PlaylistMusicaSeeder

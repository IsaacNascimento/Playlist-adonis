'use strict'

/*
|--------------------------------------------------------------------------
| PlaylistSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Playlist = use('App/Models/Playlist')

class PlaylistSeeder {
  async run () {
    await Playlist.createMany([
      {id: 1, nome: 'playlist do João'      ,usuario_id: 1, plataforma_id: 1},
      {id: 2, nome: 'playlist do Francisco' ,usuario_id: 2, plataforma_id: 1},
      {id: 3, nome: 'playlist da Maria'     ,usuario_id: 3, plataforma_id: 2},
      {id: 4, nome: 'playlist da Joana'     ,usuario_id: 4, plataforma_id: 3}
    ])
  }
}

module.exports = PlaylistSeeder

'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioPlaylistSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const UsuarioPlaylist = use('App/Models/UsuarioPlaylist')

class UsuarioPlaylistSeeder {
  async run () {
    await UsuarioPlaylist.createMany([
      {id: 1, usuario_id: 1, playlist_estilo_plataforma_id: 1},
      {id: 2, usuario_id: 1, playlist_estilo_plataforma_id: 2},
      {id: 3, usuario_id: 2, playlist_estilo_plataforma_id: 3},
      {id: 4, usuario_id: 2, playlist_estilo_plataforma_id: 4},
      {id: 5, usuario_id: 3, playlist_estilo_plataforma_id: 5},
      {id: 6, usuario_id: 4, playlist_estilo_plataforma_id: 6},
    ])
  }
}

module.exports = UsuarioPlaylistSeeder

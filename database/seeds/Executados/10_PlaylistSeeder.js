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
      {id: 1, name: 'playlist do João'},
      {id: 2, name: 'playlist do Francisco'},
      {id: 3, name: 'playlist da Maria'},
      {id: 4, name: 'playlist da Joana'}
    ])
  }
}

module.exports = PlaylistSeeder

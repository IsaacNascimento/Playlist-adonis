'use strict'

/*
|--------------------------------------------------------------------------
| PlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Plataforma = use('App/Models/Plataforma')

class PlataformaSeeder {
  async run () {
    await Plataforma.createMany([
      {id: 1, name: 'Spotify'},
      {id: 2, name: 'YouTube Music'},
      {id: 3, name: 'Deezer'},
      {id: 4, name: 'Apple Music'},
      {id: 5, name: 'Amazon Music'}
    ])
  }
}

module.exports = PlataformaSeeder

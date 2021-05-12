'use strict'

/*
|--------------------------------------------------------------------------
| AutorMusicaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const AutorMusica = use('App/Models/AutorMusica')

class AutorMusicaSeeder {
  async run () {
    await AutorMusica.createMany([
      {id: 1, musica_id: 1, autor_id: 1 },
      {id: 2, musica_id: 2, autor_id: 2 },
      {id: 3, musica_id: 3, autor_id: 3 },
      {id: 4, musica_id: 4, autor_id: 4 },
      {id: 5, musica_id: 5, autor_id: 5 },
      {id: 6, musica_id: 6, autor_id: 6 },
      {id: 7, musica_id: 7, autor_id: 7 },
      {id: 8, musica_id: 8, autor_id: 8 },
    ])
  }
}

module.exports = AutorMusicaSeeder

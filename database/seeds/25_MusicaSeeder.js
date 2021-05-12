'use strict'

/*
|--------------------------------------------------------------------------
| MusicaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Musica = use('App/Models/Musica')

class MusicaSeeder {
  async run () {
    await Musica.createMany([
      {id: 1, nome: 'Quero te encontrar'          , estilo_id: 1},
      {id: 2, nome: 'Ando devagar'                , estilo_id: 2},
      {id: 3, nome: 'Titanium'                    , estilo_id: 3},
      {id: 4, nome: 'Bohemian Rhapsody'           , estilo_id: 4},
      {id: 5, nome: 'Vida Loka II'                , estilo_id: 5},
      {id: 6, nome: 'Máquina do tempo'            , estilo_id: 6},
      {id: 7, nome: 'Presente De Um Beija-Flor'   , estilo_id: 7},
      {id: 8, nome: 'Patricinha de Olho Azul'     , estilo_id: 8},
    ])
  }
}

module.exports = MusicaSeeder

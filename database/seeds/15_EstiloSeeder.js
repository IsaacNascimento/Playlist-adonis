'use strict'

/*
|--------------------------------------------------------------------------
| EstiloSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Estilo = use('App/Models/Estilo')

class EstiloSeeder {
  async run () {
    await Estilo.createMany([
      {id: 1, nome: 'Funk'      , tipo: 'Animada'},
      {id: 2, nome: 'Sertanejo' , tipo: 'Romântica'},
      {id: 3, nome: 'Eletrônica', tipo: 'Animada'},
      {id: 4, nome: 'Rock'      , tipo: ''},
      {id: 5, nome: 'Rap'       , tipo: 'Reflexiva'},
      {id: 6, nome: 'Trap'      , tipo: ''},
      {id: 7, nome: 'Raggae'    , tipo: 'Reflexiva'},
      {id: 8, nome: 'Pagode'    , tipo: 'Animada'},
    ])
  }
}

module.exports = EstiloSeeder

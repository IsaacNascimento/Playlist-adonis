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
      {id: 1, name: 'Funk'},
      {id: 2, name: 'Sertanejo'},
      {id: 3, name: 'Eletrônica'},
      {id: 4, name: 'Rock'},
      {id: 5, name: 'Rap'},
      {id: 6, name: 'Trap'},
      {id: 7, name: 'Raggae'},
      {id: 8, name: 'Pagode'},
    ])
  }
}

module.exports = EstiloSeeder

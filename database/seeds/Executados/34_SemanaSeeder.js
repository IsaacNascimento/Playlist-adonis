'use strict'

/*
|--------------------------------------------------------------------------
| SemanaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Semana = use('App/Models/Semana')

class SemanaSeeder {
  async run () {
    await Semana.createMany([
      {id: 1, dia: 'segunda-feira'},
      {id: 2, dia: 'terça-feira'},
      {id: 3, dia: 'quarta-feira'},
      {id: 4, dia: 'quinta-feira'},
      {id: 5, dia: 'sexta-feira'},
      {id: 6, dia: 'sábado'},
      {id: 7, dia: 'domingo'},
    ])
  }
}

module.exports = SemanaSeeder

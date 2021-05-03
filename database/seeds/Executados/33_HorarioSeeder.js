'use strict'

/*
|--------------------------------------------------------------------------
| HorarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Horario = use('App/Models/Horario')

class HorarioSeeder {
  async run () {
    await Horario.createMany([
      {id: 1, hora: '7:00 AM'},
      {id: 2, hora: '8:00 AM'},
      {id: 3, hora: '9:00 AM'},
      {id: 4, hora: '10:00 AM'},
      {id: 5, hora: '11:00 AM'},
      {id: 6, hora: '12:00 AM'},
      {id: 7, hora: '20:00 PM'},
      {id: 8, hora: '21:00 PM'},
    ])
  }
}

module.exports = HorarioSeeder

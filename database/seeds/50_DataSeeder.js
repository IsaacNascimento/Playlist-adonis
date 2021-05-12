'use strict'

/*
|--------------------------------------------------------------------------
| DataSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Data = use('App/Models/Data')

class DataSeeder {
  async run () {
    await Data.createMany([
      {id: 1, hora: '07:00 AM'  ,semana: 'Segunda-feira' , despertador_id: 1},
      {id: 2, hora: '07:00 PM'  ,semana: 'Terça-feira'   , despertador_id: 2},
      {id: 3, hora: '05:00 PM'  ,semana: 'Quarta-feira'  , despertador_id: 3},
      {id: 4, hora: '02:00 PM'  ,semana: 'Quinta-feira'  , despertador_id: 4},
      {id: 5, hora: '08:00 PM'  ,semana: 'Sexta-feira'   , despertador_id: 5},
      {id: 6, hora: '10:00 AM'  ,semana: 'Sábado'        , despertador_id: 6},
      {id: 7, hora: '10:00 AM'  ,semana: 'Domingo'       , despertador_id: 6},
    ])
  }
}

module.exports = DataSeeder

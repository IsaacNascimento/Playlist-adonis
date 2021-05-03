'use strict'

/*
|--------------------------------------------------------------------------
| UsuarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Usuario = use('App/Models/Usuario')

class UsuarioSeeder {
  async run () {
    await Usuario.createMany([
      {id: 1 ,  name: 'João'},
      {id: 2 ,  name: 'Francisco'}, 
      {id: 3 ,  name: 'Maria'},
      {id: 4 ,  name: 'Joana'} 
    ])
  }
}

module.exports = UsuarioSeeder

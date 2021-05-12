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
      {id: 1 ,  nome: 'João'},
      {id: 2 ,  nome: 'Francisco'}, 
      {id: 3 ,  nome: 'Maria'},
      {id: 4 ,  nome: 'Joana'} 
    ])
  }
}

module.exports = UsuarioSeeder

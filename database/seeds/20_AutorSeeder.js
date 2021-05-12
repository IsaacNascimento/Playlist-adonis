'use strict'

/*
|--------------------------------------------------------------------------
| AutorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Autor = use('App/Models/Autor')

class AutorSeeder {
  async run () {
    await Autor.createMany([
      {id: 1, nome: 'Claudinho e Bochecha' },
      {id: 2, nome: 'Almir Sater'          },
      {id: 3, nome: 'David Guetta'         },
      {id: 4, nome: 'Queen'                },
      {id: 5, nome: 'Racionais'            },
      {id: 6, nome: 'Matuê'                },
      {id: 7, nome: 'Matuê'                },
      {id: 8, nome: 'Bom Gosto'            },
    ])
  }
}

module.exports = AutorSeeder

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


/** 
*  @swagger
*  definitions:
*    Autor:
*      type: object
*      properties:
*        nome:
*          type: string
*          maxLength: 50
*        required:
*         - nome
*/


class Autor extends Model {

    static get table(){
        return 'autores'
 }
   static getCamposCadastro(){
        return [
        'nome', 
    ]
}

   musicas(){ 

    return this.belongsToMany('App/Models/Musica').pivotTable('autor_musicas')
              
    }
}

module.exports = Autor

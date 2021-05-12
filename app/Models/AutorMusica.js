'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AutorMusica extends Model {

   static getCamposCadastro(){
        return [
        'musica_id', 
        'autor_id', 
    ]
}

   musicas(){ 

    return this.belongsTo('App/Models/Musica')
              
    }
   autores(){ 

    return this.belongsTo('App/Models/Autor')
              
    }
}

module.exports = AutorMusica

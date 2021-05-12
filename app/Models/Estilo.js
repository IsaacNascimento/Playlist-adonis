'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estilo extends Model {

    static getCamposCadastro(){
        return [
        'nome',
        'tipo' 
    ]
}

   musicas(){ 

    return this.hasMany('App/Models/Musica')
              
    }
}

module.exports = Estilo

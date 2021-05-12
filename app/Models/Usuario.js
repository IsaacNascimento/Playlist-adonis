'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {

    static getCamposCadastro(){
        return [
        'nome', 
    ]
}

   playlists(){ 

    return this.hasMany('App/Models/Playlist')
              
    }
   despertadores(){ 

    return this.hasMany('App/Models/Despertador')
              
    }

}

module.exports = Usuario

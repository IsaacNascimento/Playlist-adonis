'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plataforma extends Model {

    static getCamposCadastro(){
        return [
        'nome', 
    ]
}

   playlists(){ 

    return this.hasMany('App/Models/Playlist')
              
    }

}

module.exports = Plataforma

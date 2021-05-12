'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PlaylistMusica extends Model {

    static getCamposCadastro(){
        return [
        'nome', 
        'usuario_id',
        'plataforma_id'
    ]
}

   musicas(){ 

    return this.belongsTo('App/Models/Musica')
              
    }
   playlists(){ 

    return this.belongsTo('App/Models/Playlist')
              
    }
}

module.exports = PlaylistMusica

'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PlaylistMusica extends Model {

    static getCamposCadastro(){
        return [
        'musica_id',
        'playlist_id'
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

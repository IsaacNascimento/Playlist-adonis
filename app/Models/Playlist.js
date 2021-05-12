'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Playlist extends Model {

    static getCamposCadastro(){
        return [
        'nome', 
        'usuario_id',
        'plataforma_id'
    ]
}

   musicas(){ 

    return this.belongsToMany('App/Models/Musica').pivotTable('playlist_musicas')
              
    }
   plataforma(){ 

    return this.belongsTo('App/Models/Plataforma')
              
    }
   usuario(){ 

    return this.belongsTo('App/Models/Usuario')
              
    }
   despertadores(){ 

    return this.hasMany('App/Models/Despertador')
              
    }
}

module.exports = Playlist

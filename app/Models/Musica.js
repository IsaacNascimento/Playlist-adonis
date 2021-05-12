'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Musica extends Model {

    static getCamposCadastro(){
        return [
        'nome',
        'estilo_id',
        'autor_id',
    ]
}

   estilo(){ 

    return this.belongsTo('App/Models/Estilo')      
    }

   autores(){ 

    return this.belongsToMany('App/Models/Autor').pivotTable('autor_musicas')        
    }
   playlist(){ 

    return this.belongsToMany('App/Models/Playlist').pivotTable('playlist_musicas')        
    }

}

module.exports = Musica

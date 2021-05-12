'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Despertador extends Model {

    static get table(){
        return 'despertadores'
    }

    static getCamposCadastro(){
        return [
        'titulo', 
        'usuario_id',
        'playlist_id'
       ]
    }

    playlist(){ 
    
    return this.belongsTo('App/Models/Playlist')
              
    }
    usuario(){ 
    
    return this.belongsTo('App/Models/Usuario')
              
    }
    datas(){ 
    
    return this.hasMany('App/Models/Data')
              
    }

}
module.exports = Despertador

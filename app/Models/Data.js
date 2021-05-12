'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Data extends Model {

    static getCamposCadastro(){
        return [
        'hora', 
        'semana',
        'despertador_id'
       ]
    }

   
    despertador(){ 
    
    return this.belongsTo('App/Models/Despertador')
              
    }
}

module.exports = Data

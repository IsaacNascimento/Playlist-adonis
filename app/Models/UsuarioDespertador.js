'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsuarioDespertador extends Model {

    static get table(){
        return 'usuario_despertadores'
 }
}

module.exports = UsuarioDespertador

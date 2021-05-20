'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class AutorMusica extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      musica_id: 'required|integer',
      autor_id: 'required|integer',
    }
  }
}

module.exports = AutorMusica

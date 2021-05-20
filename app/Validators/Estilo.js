'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Estilo extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      tipo: 'max:100|min:2',

    }
  }
}

module.exports = Estilo

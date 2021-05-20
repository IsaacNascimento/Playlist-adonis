'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Usuario extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
    }
  }
}

module.exports = Usuario

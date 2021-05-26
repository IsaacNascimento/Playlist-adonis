'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Musica extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      estilo_id: 'integer|required',
      //autor_id: 'integer|required'
    }
  }
}

module.exports = Musica

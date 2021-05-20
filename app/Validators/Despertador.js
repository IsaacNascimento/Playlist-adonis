'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Despertador extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      titulo: 'required|max:100|min:2',
      usuario_id: 'required|integer',
      playlist_id: 'required|integer',
    }
  }
}

module.exports = Despertador

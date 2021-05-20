'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Playlist extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      nome: 'required|max:100|min:2',
      usuario_id: 'integer|required',
      plataforma_id: 'integer|required',
    }
  }
}

module.exports = Playlist

'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class PlaylistMusica extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      musica_id: 'integer|required',
      playlist_id: 'integer|required',
    }
  }
}

module.exports = PlaylistMusica

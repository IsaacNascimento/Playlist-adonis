'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Data extends ValidatorAbstract {
  get rules () {
    return {
      // validation rules
      hora: 'required|max:5|min:5',
      semana: 'required|max:20|min:6',
      despertador_id: 'integer|required'
    }
  }
}

module.exports = Data

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Data = use("App/Models/Data")
/**
 * Resourceful controller for interacting with datas
 */
class dataController {
  /**
   * Show a list of all datas.
   * GET datas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Data.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Data.
   * GET datas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Data.
   * POST datas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Data = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Data.create(Data)

    const campos = Data.getCamposCadastro() //Forma mais elegante
    const data = request.only(campos)
    return await Data.create(data)
  }


  /**
   * Display a single Data.
   * GET datas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Data.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                     .with('despertador')
                     .where(' id', params.id)
                     .first();
  }

  /**
   * Render a form to update an existing Data.
   * GET datas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Data details.
   * PUT or PATCH datas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const data = await Data.findOrFail(params.id); //Forma mais elegante

    const campos = Data.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    data.merge(dados);
    await data.save();

    return data;
  }

  /**
   * Delete a Data with id.
   * DELETE datas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const data = await Data.findOrFail(params.id);

    return await data.delete()
  }
}

module.exports = dataController

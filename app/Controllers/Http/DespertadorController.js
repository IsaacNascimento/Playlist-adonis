'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Despertador = use("App/Models/Despertador")
/**
 * Resourceful controller for interacting with despertadors
 */
class despertadorController {
  /**
   * Show a list of all despertadors.
   * GET despertadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Despertador.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Despertador.
   * GET despertadors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Despertador.
   * POST despertadors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Despertador = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Despertador.create(Despertador)

    const campos = Despertador.getCamposCadastro() //Forma mais elegante
    const despertador = request.only(campos)
    return await Despertador.create(despertador)
  }


  /**
   * Display a single Despertador.
   * GET despertadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Despertador.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                            .with('playlist')
                            .with('usuario')
                            .with('datas')
                            .where(' id', params.id)
                            .first();
  }

  /**
   * Render a form to update an existing Despertador.
   * GET despertadors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Despertador details.
   * PUT or PATCH despertadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const despertador = await Despertador.findOrFail(params.id); //Forma mais elegante

    const campos = Despertador.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    despertador.merge(dados);
    await despertador.save();

    return despertador;
  }

  /**
   * Delete a Despertador with id.
   * DELETE despertadors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const despertador = await Despertador.findOrFail(params.id);

    return await despertador.delete()
  }
}

module.exports = despertadorController

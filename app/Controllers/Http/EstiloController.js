'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Estilo = use("App/Models/Estilo")
/**
 * Resourceful controller for interacting with Estilos
 */
class EstiloController {
  /**
   * Show a list of all Estilos.
   * GET Estilos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Estilo.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Estilo.
   * GET Estilos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Estilo.
   * POST Estilos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Estilo = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Estilo.create(Estilo)

    const campos = Estilo.getCamposCadastro() //Forma mais elegante
    const estilo = request.only(campos)
    return await Estilo.create(estilo)
  }


  /**
   * Display a single Estilo.
   * GET Estilos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Estilo.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                       .with('musicas')
                       .where(' id', params.id)
                       .first();
  }

  /**
   * Render a form to update an existing Estilo.
   * GET Estilos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Estilo details.
   * PUT or PATCH Estilos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const estilo = await Estilo.findOrFail(params.id); //Forma mais elegante

    const campos = Estilo.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    estilo.merge(dados);
    await estilo.save();

    return estilo;
  }

  /**
   * Delete a Estilo with id.
   * DELETE Estilos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const estilo = await Estilo.findOrFail(params.id);

    return await estilo.delete()
  }
}

module.exports = EstiloController

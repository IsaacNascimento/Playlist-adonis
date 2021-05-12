'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Plataforma = use("App/Models/Plataforma")
/**
 * Resourceful controller for interacting with Plataformas
 */
class PlataformaController {
  /**
   * Show a list of all Plataformas.
   * GET Plataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Plataforma.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Plataforma.
   * GET Plataformas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Plataforma.
   * POST Plataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Plataforma = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Plataforma.create(Plataforma)

    const campos = Plataforma.getCamposCadastro() //Forma mais elegante
    const plataforma = request.only(campos)
    return await Plataforma.create(plataforma)
  }


  /**
   * Display a single Plataforma.
   * GET Plataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Plataforma.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                           .with('playlists')
                           .where(' id', params.id)
                           .first();
  }

  /**
   * Render a form to update an existing Plataforma.
   * GET Plataformas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Plataforma details.
   * PUT or PATCH Plataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const plataforma = await Plataforma.findOrFail(params.id); //Forma mais elegante

    const campos = Plataforma.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    plataforma.merge(dados);
    await plataforma.save();

    return plataforma;
  }

  /**
   * Delete a Plataforma with id.
   * DELETE Plataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const plataforma = await Plataforma.findOrFail(params.id);

    return await plataforma.delete()
  }
}

module.exports = PlataformaController

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const AutorMusica = use("App/Models/AutorMusica")
/**
 * Resourceful controller for interacting with AutorMusicas
 */
class AutorMusicaController {
  /**
   * Show a list of all AutorMusicas.
   * GET AutorMusicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return AutorMusica.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new AutorMusica.
   * GET AutorMusicas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new AutorMusica.
   * POST AutorMusicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const AutorMusica = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await AutorMusica.create(AutorMusica)

    const campos = AutorMusica.getCamposCadastro() //Forma mais elegante
    const autorMusica = request.only(campos)
    return await AutorMusica.create(autorMusica)
  }


  /**
   * Display a single AutorMusica.
   * GET AutorMusicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await AutorMusica.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                            .with('musicas')
                            .with('autores')
                            .where(' id', params.id)
                            .first();
  }

  /**
   * Render a form to update an existing AutorMusica.
   * GET AutorMusicas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update AutorMusica details.
   * PUT or PATCH AutorMusicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const autorMusica = await AutorMusica.findOrFail(params.id); //Forma mais elegante

    const campos = AutorMusica.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    autorMusica.merge(dados);
    await autorMusica.save();

    return autorMusica;
  }

  /**
   * Delete a AutorMusica with id.
   * DELETE AutorMusicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const autorMusica = await AutorMusica.findOrFail(params.id);

    return await autorMusica.delete()
  }
}

module.exports = AutorMusicaController

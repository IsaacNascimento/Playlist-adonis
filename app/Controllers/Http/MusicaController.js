'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Musica = use("App/Models/Musica")
/**
 * Resourceful controller for interacting with Musicas
 */
class MusicaController {
  /**
   * Show a list of all Musicas.
   * GET Musicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Musica.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Musica.
   * GET Musicas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Musica.
   * POST Musicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Musica = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Musica.create(Musica)

    const campos = Musica.getCamposCadastro() //Forma mais elegante
    const musica = request.only(campos)
    return await Musica.create(musica)
  }


  /**
   * Display a single Musica.
   * GET Musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Musica.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                       .with('estilo')
                       //.with('autores')
                       .with('playlist')
                       .where('id', params.id)
                       .first();
  }

  /**
   * Render a form to update an existing Musica.
   * GET Musicas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Musica details.
   * PUT or PATCH Musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const musica = await Musica.findOrFail(params.id); //Forma mais elegante

    const campos = Musica.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    musica.merge(dados);
    await musica.save();

    return musica;
  }

  /**
   * Delete a Musica with id.
   * DELETE Musicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const musica = await Musica.findOrFail(params.id);

    return await musica.delete()
  }
}

module.exports = MusicaController

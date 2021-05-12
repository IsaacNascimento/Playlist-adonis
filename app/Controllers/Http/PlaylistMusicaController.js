'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PlaylistMusica = use("App/Models/PlaylistMusica")
/**
 * Resourceful controller for interacting with PlaylistMusicas
 */
class PlaylistMusicaController {
  /**
   * Show a list of all PlaylistMusicas.
   * GET PlaylistMusicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return PlaylistMusica.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new PlaylistMusica.
   * GET PlaylistMusicas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new PlaylistMusica.
   * POST PlaylistMusicas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const PlaylistMusica = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await PlaylistMusica.create(PlaylistMusica)

    const campos = PlaylistMusica.getCamposCadastro() //Forma mais elegante
    const playlistMusica = request.only(campos)
    return await PlaylistMusica.create(playlistMusica)
  }


  /**
   * Display a single PlaylistMusica.
   * GET PlaylistMusicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await PlaylistMusica.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                               .with('musicas')
                               .with('playlists')
                               .where(' id', params.id)
                               .first();
  }

  /**
   * Render a form to update an existing PlaylistMusica.
   * GET PlaylistMusicas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update PlaylistMusica details.
   * PUT or PATCH PlaylistMusicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const playlistMusica = await PlaylistMusica.findOrFail(params.id); //Forma mais elegante

    const campos = PlaylistMusica.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    playlistMusica.merge(dados);
    await playlistMusica.save();

    return playlistMusica;
  }

  /**
   * Delete a PlaylistMusica with id.
   * DELETE PlaylistMusicas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const playlistMusica = await PlaylistMusica.findOrFail(params.id);

    return await playlistMusica.delete()
  }
}

module.exports = PlaylistMusicaController

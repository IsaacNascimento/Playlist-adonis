'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Playlist = use("App/Models/Playlist")
/**
 * Resourceful controller for interacting with Playlists
 */
class PlaylistController {
  /**
   * Show a list of all Playlists.
   * GET Playlists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Playlist.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Playlist.
   * GET Playlists/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Playlist.
   * POST Playlists
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Playlist = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Playlist.create(Playlist)

    const campos = Playlist.getCamposCadastro() //Forma mais elegante
    const playlist = request.only(campos)
    return await Playlist.create(playlist)
  }


  /**
   * Display a single Playlist.
   * GET Playlists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Playlist.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                         .with('musicas')
                         .with('plataforma')
                         .with('usuario')
                         .with('despertadores')
                         .where(' id', params.id)
                         .first();
  }

  /**
   * Render a form to update an existing Playlist.
   * GET Playlists/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Playlist details.
   * PUT or PATCH Playlists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const playlist = await Playlist.findOrFail(params.id); //Forma mais elegante

    const campos = Playlist.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    playlist.merge(dados);
    await playlist.save();

    return playlist;
  }

  /**
   * Delete a Playlist with id.
   * DELETE Playlists/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const playlist = await Playlist.findOrFail(params.id);

    return await playlist.delete()
  }
}

module.exports = PlaylistController

'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Usuario = use("App/Models/Usuario")
/**
 * Resourceful controller for interacting with Usuarios
 */
class UsuarioController {
  /**
   * Show a list of all Usuarios.
   * GET Usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Usuario.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Usuario.
   * GET Usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Usuario.
   * POST Usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    //const Usuario = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Usuario.create(Usuario)

    const campos = Usuario.getCamposCadastro() //Forma mais elegante
    const usuario = request.only(campos)
    return await Usuario.create(usuario)
  }


  /**
   * Display a single Usuario.
   * GET Usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Usuario.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                        .with('playlists')
                        .with('despertadores')
                        .where(' id', params.id)
                        .first();
  }

  /**
   * Render a form to update an existing Usuario.
   * GET Usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Usuario details.
   * PUT or PATCH Usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const usuario = await Usuario.findOrFail(params.id); //Forma mais elegante

    const campos = Usuario.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    usuario.merge(dados);
    await usuario.save();

    return usuario;
  }

  /**
   * Delete a Usuario with id.
   * DELETE Usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const usuario = await Usuario.findOrFail(params.id);

    return await usuario.delete()
  }
}

module.exports = UsuarioController

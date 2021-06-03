'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Autor = use("App/Models/Autor")
/**
 * Resourceful controller for interacting with Autors
 */
class AutorController {
  /**
   * Show a list of all Autors.
   * GET Autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  /**
  * @swagger
  * /autores:
  *   get:
  *     tags:
  *       - Autor
  *     summary: Listagem completa de Autores
  *     
  *     responses:
  *       200:
  *         description: Lista paginada de Autores
  *       
  */

  async index ({ request, response, view }) {
    let {page, perPage} = request.all();
     
    perPage = perPage ? perPage : 5

    return Autor.query().paginate(page, perPage);
  }

  /**
   * Render a form to be used for creating a new Autor.
   * GET Autors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  
  /*async create ({ request, response, view }) {
  }

  /**
   * Create/save a new Autor.
   * POST Autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */


   /**
  * @swagger
  * /autores:
  *   post:
  *     tags:
  *       - Autor
  *     summary: Criação de um novo Autor
  *     parameters: 
  *         - name: autor
  *           description: Objeto de Autor
  *           in: body
  *           required: true
  *           type: object
  *           schema:
  *             $ref: '#/definitions/Autor'
  *     responses:
  *       200:
  *         description: Autores Criados
  *       
  */
  async store ({ request, response }) {
    //const Autor = request.only(['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone', 'cep', 'logradouro', 'complemento', 'bairro', 'uf', 'municipio'])
    //return await Autor.create(Autor)

    const campos = Autor.getCamposCadastro() //Forma mais elegante
    const autor = request.only(campos)
    return await Autor.create(autor)
  }


  /**
   * Display a single Autor.
   * GET Autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Autor.query()                 // Mesma coisa do FindOrFail, porém usando o "with".
                      .with('musicas')
                      .where(' id', params.id)
                      .first();
  }

  /**
   * Render a form to update an existing Autor.
   * GET Autors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update Autor details.
   * PUT or PATCH Autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const autor = await Autor.findOrFail(params.id); //Forma mais elegante

    const campos = Autor.getCamposCadastro() // Exportar da Model. Assim vc não precisa modificar de um em um.
    const dados = request.only(campos)

    autor.merge(dados);
    await autor.save();

    return autor;
  }

  /**
   * Delete a Autor with id.
   * DELETE Autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const autor = await Autor.findOrFail(params.id);

    return await autor.delete()
  }
}

module.exports = AutorController

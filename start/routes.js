'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/usuarios', 'UsuarioController').apiOnly();

Route.resource('/autores', 'AutorController').apiOnly();

Route.resource('/estilos', 'EstiloController').apiOnly();

Route.resource('/musicas', 'MusicaController').apiOnly();

Route.resource('/plataformas', 'PlataformaController').apiOnly();

Route.resource('/playlists', 'PlaylistController').apiOnly();

Route.resource('/playlistsmusicas', 'PlaylistMusicaController').apiOnly();

Route.resource('/autormusicas', 'AutorMusicaController').apiOnly();

Route.resource('/despertadores', 'DespertadorController').apiOnly();

Route.resource('/datas', 'DataController').apiOnly();

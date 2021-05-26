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

Route.post('/token', 'UserController.token')
Route.resource('/users', 'UserController').apiOnly()

Route.group(()=> {

  Route.resource('/usuarios', 'UsuarioController')
       .apiOnly()
       .validator(new Map([
         [['store', 'update'], 'Usuario'], 
         ]))

  Route.resource('/autores', 'AutorController')
       .apiOnly()
       .validator(new Map([
        [['store', 'update'], 'Autor'], 
        ]))

  Route.resource('/estilos', 'EstiloController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'Estilo'], 
       ]))

  Route.resource('/musicas', 'MusicaController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'Musica'], 
       ]))

  Route.resource('/plataformas', 'PlataformaController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'Plataforma'], 
       ]))

  Route.resource('/playlists', 'PlaylistController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'Playlist'], 
       ]))

  Route.resource('/playlistsmusicas', 'PlaylistMusicaController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'PlaylistMusica'], 
       ]))

  Route.resource('/autormusicas', 'AutorMusicaController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'AutorMusica'], 
       ]))

  Route.resource('/despertadores', 'DespertadorController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'Despertador'], 
       ]))

  Route.resource('/datas', 'DataController')
       .apiOnly()
       .validator(new Map([
       [['store', 'update'], 'Data'], 
       ]))

}).middleware('auth')


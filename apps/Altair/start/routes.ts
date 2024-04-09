/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ItemsController = () => import('#controllers/items_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    data: 'Privet brat!',
  }
})

router.get('/items', [ItemsController, 'index'])

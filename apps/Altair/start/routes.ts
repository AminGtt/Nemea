/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ItemsController = () => import('#controllers/items_controller')
const HomeController = () => import('#controllers/home_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'home'])

router.get('/items', [ItemsController, 'index'])
router.get('/item/', [ItemsController, 'show'])
router.post('/item', [ItemsController, 'create'])
router.patch('/item', [ItemsController, 'edit'])
router.delete('/item', [ItemsController, 'destroy'])

import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async home({}: HttpContext) {
    return {
      data: 'Priviet brat!',
    }
  }
}

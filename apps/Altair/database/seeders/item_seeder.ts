import Item from '#models/item'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Item.create({
      name: 'Amin',
      type: 'star',
      category: 'red giant',
      infos: 'The only day a star will have my name',
    })
  }
}

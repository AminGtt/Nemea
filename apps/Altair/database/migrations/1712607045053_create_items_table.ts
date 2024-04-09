import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'items'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()

      table.string('name').notNullable().unique()
      table.string('type').notNullable()
      table.string('category').notNullable()
      table.text('infos').notNullable()

      table.json('extra')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

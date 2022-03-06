(async () => {

  const { mariadb, sqlite } = require('./connections.js')

  try {
    await mariadb.schema.dropTableIfExists('products')
    await mariadb.schema.createTable('products', table => {
      table.increments('id')
      table.string('title')
      table.decimal('price', 8, 2)
      table.string('thumbnail')
    })
    console.log('Migration to mariadb done.')

    await sqlite.schema.dropTableIfExists('messages')
    await sqlite.schema.createTable('messages', table => {
      table.increments('id')
      table.string('email')
      table.text('message')
      table.datetime('date')
    })
    console.log('Migration to sqlite done.')
  }
  catch (e) {
    console.log(e)
  }
  finally {
    mariadb.destroy()
    sqlite.destroy()
  }

})()
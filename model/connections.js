const knex = require('knex')
const path = require('path')

const mariadb = knex({
  client: 'mysql',
  connection: {
    host: 'mariadb', // Refiere al container mariadb, porque uso docker
    port: 3306,
    user: 'backend',
    password: 'backend',
    database: 'backend'
  }
})

const sqlite = knex({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '/db/ecommerce.sqlite')
  },
  useNullAsDefault: true
})

module.exports = {
  mariadb,
  sqlite
}
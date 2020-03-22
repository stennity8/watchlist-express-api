const { Pool, Client } = require('pg')
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
})

// Query all users
const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers
}

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })


// const client = new Client({
//   user: 'pguser',
//   host: 'localhost',
//   database: 'watchlist_api_development',
//   password: null,
//   port: 5432,
// })
// client.connect()
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })
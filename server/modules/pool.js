const pg = require('pg');

const Pool = pg.Pool;


const pool = new Pool({
    host: 'localhost',
    port: 3000,
    database: 'todo_list',
    password: 'Gambino20',
    user: 'postgres'
})



module.exports = pool;
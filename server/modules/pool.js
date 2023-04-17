const pg = require('pg');

const Pool = pg.Pool;


const pool = new Pool({
    host: 'localhost',
    port: 3000,
    database: 'weekend_to_do_app',
    password: 'Gambino20',
    user: 'postgres'
})



module.exports = pool;
const pg = require('pg');

const Pool = pg.Pool;


const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'weekend_to_do_app'
})



module.exports = pool;
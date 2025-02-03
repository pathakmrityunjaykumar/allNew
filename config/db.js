const {Pool } =require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,  //'postgres'
    host: process.env.DB_HOST,  //'122.176.81.150'
    database: process.env.DB_NAME, //'traccardb'
    password:process.env.DB_PASSWORD, //'tracking
    port:process.env.DB_PORT

});

pool.connect()
    .then(() => console.log("Connected to the database"))
    .catch(err => console.log("Error connecting to the database:", err));

module.exports = pool;
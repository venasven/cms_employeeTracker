const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'employee_tracker',
});

db.on('error', (err) => {
    console.log('- Connection error!', err);
});

module.exports = db;
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'password',
    user: 'student',
    database: 'elevage',
    host: 'localhost',
    port: '3306'
})

let elevagedb = {};

elevagedb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Animal', (err, results) => {
            if (err) {
                return reject(err);
            } 
            return resolve(results);
        })
    })
}

elevagedb.one = (espece) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM Animal WHERE espece = ?', [espece], (err, results) => {
            if (err) {
                return reject(err);
            } 
            return resolve(results);
        })
    })
}

module.exports = elevagedb;
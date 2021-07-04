const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'password',
    user: 'student',
    database: 'elevage',
    host: 'localhost',
    port: '3306'
})

// let elevagedb = {};

// elevagedb.all = () => {
//     return new Promise((resolve, reject) => {
//         pool.query('SELECT * FROM Animal', (err, results) => {
//             if (err) {
//                 return reject(err);
//             } 
//             return resolve(results);
//         })
//     })
// }

// COMME CA 
// exports.getOne = (espece) => {
//         return new Promise((resolve, reject) => {
//             pool.query('SELECT * FROM Animal WHERE espece = ?', [espece], (err, results) => {
//                 if (err || results.length === 0) {
//                     return reject(results);
//                 } 
//                 return resolve(results);
//             })
//         })   
// }

// CAS DE NULL
exports.getOne = (espece) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM Animal WHERE espece = ? && nom IS NOT NULL", [espece], (err, results) => {
            if (err || results.length === 0) {
                return reject(results);
            } 
            return resolve(results);
        })
    })   
}

exports.getOneSortByDate = (espece, sort) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Animal WHERE espece = ${pool.escape(espece)} ORDER BY ${pool.escapeId(sort)}`, (err, results) => {
            if (err || results.length === 0) {
                return reject(results);
            } 
            return resolve(results);
        })
    })   
}

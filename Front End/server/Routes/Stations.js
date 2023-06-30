const express = require('express');
const StationApp = express.Router();
const config = require('config');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});
var count = 0;
StationApp.get('/', (request, response) => {
    var query = 'select name,code from Stations';
    console.log("hii from station " + count++)
    connection.query(query, (error, result) => {
        error==null ? response.send(JSON.stringify(result)) : response.send(JSON.stringify(error))
    })
})
module.exports = StationApp;
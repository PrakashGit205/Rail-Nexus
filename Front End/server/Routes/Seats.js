const express = require('express');
const SeatsApp = express.Router();
const config = require('config');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});
SeatsApp.post('/', (request, response) => {
    var query = `select  SeatType,sum(SeatAvlbl) Seat  from LiveSeats where STrainNo = '${request.body.train.trnNo}' and DepartDate = '${request.body.train.journeyDate}' group by SeatType`;
    console.log("hii from Seats")
    console.log(request.body)
    connection.query(query, (error, result) => {
        error==null ? response.send(JSON.stringify(result)) : response.send(JSON.stringify(error))
    })
})
module.exports = SeatsApp;
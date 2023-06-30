const express = require('express');
const LoginApp = express.Router();
const config = require('config');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});
LoginApp.post('/', (request, response) => {
    var query = `select fname,lname,username from Users where userName = '${request.body.username}' and password = '${request.body.password}'`;
    console.log("hii from login")
    console.log(request.body)
    connection.query(query, (error, result) => {
        // var reply = { isValid: 'true'};
        
        if (error == null) {
            // console.log("Hii from")
            var r = JSON.stringify(result);
            // var s = JSON.parse(result);
            // console.log(r.password);
            // console.log(s.password);
            response.send(r);
        }
        else {
            console.log(error);
            response.send(JSON.stringify(error));
        }
    })
})
module.exports = LoginApp;
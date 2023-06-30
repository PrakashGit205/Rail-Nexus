const express = require('express');
const TrainsApp = express.Router();
const config = require('config');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.get('host'),
    user: config.get('user'),
    password: config.get('password'),
    database: config.get('database')
});
TrainsApp.get('/:StartId/:EndId/:Date', (request, response) => {
    console.log("hii from trains")

    var query = `select distinct trnNo,trnName,time_format(startTime,'%H:%i') as startTime,time_format( addtime(startTime,sec_to_time((distBtwstn / speed) * 3600)),'%H:%i') endTime from trains,Distance where sequence LIKE '%${request.params.StartId}%${request.params.EndId}%' and trnNo = any(select trnNo from RunningTrains where runningDate = '${request.params.Date}') and  (endCode = '${request.params.EndId}' and  startCode = '${request.params.StartId}') or(startCode = '${request.params.EndId}' and  endCode = '${request.params.StartId}')     
      `;

    connection.query(query, (error, result) => {
        error == null ? response.send(JSON.stringify(result)) : response.send(JSON.stringify(error));
    })
})
TrainsApp.get('/:StartId/:EndId', (request, response) => {
    console.log("hii from trains")

    var query = `select  distinct trnNo,trnName,time_format(startTime,'%H:%i') as startTime,time_format( addtime(startTime,sec_to_time((distBtwstn / speed) * 3600)),'%H:%i') endTime from trains,Distance where sequence LIKE '%${request.params.StartId}%${request.params.EndId}%'  and (endCode = '${request.params.EndId}' and  startCode = '${request.params.StartId}') or(startCode = '${request.params.EndId}' and  endCode = '${request.params.StartId}') `;

    connection.query(query, (error, result) => {
        error == null ? response.send(JSON.stringify(result)) : response.send(JSON.stringify(error));
    })
})
TrainsApp.get('/:date', (request, response) => {
    console.log("hii from date")
    var query = `select trnNo,trnName,TIME_FORMAT(startTime, "%H:%i") as startTime,TIME_FORMAT(endTIme, "%H:%i") as endTime,date(runningDate) as runningDate from RunningTrains 
    where runningDate = '${request.params.date}'`;
    connection.query(query, (error, result) => {
        error == null ? response.send(JSON.stringify(result)) : response.send(JSON.stringify(error));

    })
})
TrainsApp.post('/', (request, response) => {
    request.body.trnNo
    console.log("hii from add train")
    var query = ` INSERT INTO trains (trnNo, trnName, startSid, endSid, startTime, endTime, trainType, mon, tue, wed, thu, fri, sat, sun, srcDestDist)
    VALUES(${request.body.trnNo},'${request.body.trnName}',${request.body.startSid},${request.body.endSid},'${request.body.startTime}','${request.body.endTime}','${request.body.trainType}',${request.body.mon},${request.body.tue},${request.body.wed},${request.body.thu},${request.body.fri},${request.body.sat},${request.body.sun},${request.body.srcDestDist})  `;
    connection.query(query, (error, result) => { error == null ? response.send(JSON.stringify(result)) : response.send(JSON.stringify(error)); })
})

module.exports = TrainsApp;
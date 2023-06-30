const express =  require('express');
const config = require('config');
const StationRoute = require('./Routes/Stations');
const TrainRoute = require('./Routes/Trains');
const LoginRoute = require('./Routes/Login');
const SeatsApp = require('./Routes/Seats');
const app = express();

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json()); //This line is acting as a
                         //middleware. It sets request.body
                         //as json data received from body
app.use((request, response, next) => {
    console.log("hi from index i");
    next();
})                       //which is originally stream.
app.use('/stations', StationRoute);
app.use('/trains', TrainRoute);
app.use('/login', LoginRoute);
app.use('/seat', SeatsApp);
app.listen(config.get("PORT"), () => { console.log("Server Started at " + config.get("PORT")) });
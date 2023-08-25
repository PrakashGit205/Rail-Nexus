
const sendemail = require('./sendemail')
const express = require('express')
const app = express()
const port = 30000

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/sendemail",sendemail)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/update', function(req, res) {
  const { name, description } = req.body;
  res.send(`Name ${name}, desc ${description}`);
});

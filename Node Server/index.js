const sendemail = require('./sendemail');
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 30000;

app.use(cors()); // Use the CORS middleware
app.use(express.json()); // Use the built-in express.json() middleware for parsing JSON

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/sendemail', sendemail); // Handle the /sendemail route

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.post('/update', function(req, res) {
  const { name, description } = req.body;
  // Send an email or perform any other actions you want here
  res.send(`Name ${name}, desc ${description}`);
});

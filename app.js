const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buzzword = require('./routes/buzzword.js');

app.use(express.static('public'));

app.use(bodyParser.urlencoded( {extended: true} ));

app.use('/buzzwords', buzzword);




const server = app.listen(3000, () => {
  console.log('Server running at port ${port} ')
})
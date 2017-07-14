const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
//const router = express.Router();
//const buzzword = require('./routes/buzzword.js');

app.use(express.static('public'));
app.use(jsonParser);
//app.use('/buzzwords', buzzword);

let wordArr = [];
let userScore = 0;

// function addNewWord (buzzWord, points) {
//   let buzzWords = {
//     buzzWord,
//     points,
//     heard: false
//   };

//   wordArr.push(buzzWords);

// }


app.get('/', (req, res) => {
  res.send('./index.html');
})

// Get buzzWords JSON
app.get('/buzzwords', (req, res) => {
  res.json({
    'buzzWords': wordArr
  });
})

app.post('/buzzword', (req, res) => {
  wordArr.push(req.body);
  console.log(wordArr);
  res.json({'success': true});

})






const server = app.listen(3000, () => {
  console.log('Server running at port ${port} ')
})
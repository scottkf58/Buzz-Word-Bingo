const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const router = express.Router();
//const buzzword = require('./routes/buzzword.js');

app.use(express.static('public'));
app.use(bodyParser.json());
//app.use('/buzzwords', buzzword);

let wordArr = [];
let userScore = 0;


app.get('/', (req, res) => {
  res.send('./index.html');
})

// Get buzzWords JSON
app.get('/buzzwords', (req, res) => {
  res.json({
    'buzzWords': wordArr
  });
})

// Push to array, post on local host
app.post('/buzzword', (req, res) => {
  wordArr.push(req.body);
  console.log(wordArr);
  res.json({'success': true});
})

// Update false to true
app.put('/buzzword', (req, res) => {
  wordArr.forEach( (word) => {
    if(word.buzzWord === req.body.buzzWord) {
      word.points = req.body.points;
      console.log('Buzzword array', wordArr);
      word.heard = req.body.heard;
      res.json(`{ 'success': true, userScore: ${word.points} }`);
    }
  })
  res.json(`{'success': false}`);
})

// Delete from array
app.delete('/buzzword', (req, res) => {
  wordArr.forEach( (word) => {
    if(word.buzzWord === req.body.buzzWord) {
      var wordIndex = wordArr.indexOf(req.body.buzzWord);
      wordArr.splice(wordIndex, 1);
      console.log('wordArr is', wordArr);
      res.json(`{"success": true}`);
    }
  })
  res.json(`{"success" : false}`);
});

// Reset
app.post('/reset', (req, res) => {
  if(req.body.reset === true) {
    wordArr = [];
    res.json(`{"success": true}`);
  }
});








const server = app.listen(3000, () => {
  console.log('Server running at port ${port} ')
})
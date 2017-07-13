const express = require('express');
const app = express();

app.use(express.static('public'));



//
app.router('/buzzword')
  .get( (req, res) => {

  })
  .post( (req, res) => {

  })
  .put( (req, res) => {

  })
  .delete( (req, res) => {

  })


app.router('/reset')
.post( (req, res) => {

})



const server = app.lsit(3000, function() {
  console.log('Server running on port 3000')
})
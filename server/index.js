const express = require('express')
const path = require('path')

const app = express()

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../public/tictacjs.html'));
});

app.get('/fist', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/fist.jpg'))
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
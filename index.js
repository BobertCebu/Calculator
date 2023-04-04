const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello From Jonos Calculator')
})

app.listen(3000)
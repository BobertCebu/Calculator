const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello From Jonos Calculator')
})

app.get('/add/:num1-:num2', function (req, res) {
  const result = parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10)
  res.send('result = ' + result)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// boilerplate from Express documentation
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
// end boilerplate

//set up template engine
app.set('view engine', 'ejs')
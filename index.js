const express = require('express')
const app = express()
const port = 5000

app.use('/public', express.static('./public'))

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})

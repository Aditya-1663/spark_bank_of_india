const connectTomongo = require("./db")
const express = require('express')
connectTomongo()



var cors = require('cors')
var app = express()

app.use(cors())

const port = 5000

app.use(express.json())


app.use('/addcustomer',require('./routes/Customer'))
app.use('/tranfermoney',require('./routes/Transfer'))
app.get('/', (req, res) => {
  res.send('Hello World! aditya')
})

app.listen(port, () => {
  console.log(` listening on port ${port}`)
})

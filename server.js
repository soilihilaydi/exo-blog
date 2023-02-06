const express = require('express')
const app = express()


const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api', (req, res) => {
  res.send('Welcome to the basic the API Rest')
})






app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
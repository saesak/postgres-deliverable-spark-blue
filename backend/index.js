const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


app.get('/', (req, res) => {
    console.log('Message Sent!')
    let num = Math.floor(getRandomArbitrary(1, 7));
    res.send([num])
})


const port = 5000
const host = 'localhost'
app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
To run -->  node index.js
node is the javascript runtime environment that runs our code in the file 'index.js'
*/
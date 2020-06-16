// Reference:
// https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('HELLO WORLD!')
})

app.listen(port, () => console.log(`Server running at port ${port}`))


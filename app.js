const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send(`HELLO WORLD! is running at port ${port}`)
})

app.listen(port, () => console.log(`Server running at port ${port}`))


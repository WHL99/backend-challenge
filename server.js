const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5005

app.use(express.json())

const searchArtist = require('./routes/searchArtist')
app.use('/', searchArtist)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
    console.log(`Todos app listening at http://localhost:${port}`)
})
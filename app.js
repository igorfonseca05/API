require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()

const routes = require('../API/routes/routes')

// Conectando a base de dados
mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Base conectada'))
    .catch((error) => console.log(error.message))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-type', 'Authorization'],
    credentials: true
}))


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem vindo ao servidor' })
})


app.use(routes)

module.exports = { app, mongoose }
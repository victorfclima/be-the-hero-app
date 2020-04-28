const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors())
//Informando ao express que estaremos utilizando o JSON para o corpo das requisições
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app

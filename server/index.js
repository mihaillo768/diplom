const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const app = express()
require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

app.use(cors())
app.use(express.json())
app.use('/api', router)

// обработка ошибок, последний middleware
app.use(errorHandler)





async function start(){
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => {console.log(`Server has been started on port ${PORT}`)}) 
    }catch(e){
        console.log(e)
    }
}

start()



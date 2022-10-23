const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const cors = require('cors')

const app = express()

app.use(myconn(mysql, {
    host: 'tarea201806840.mysql.database.azure.com',
    port: 3306,
    user: 'administrador',
    password: 'Mitoman9',
    database: 'tarea201806840'
}))
app.use(cors())

app.use(require('./routes/routes'))

app.listen(9000, () => {
    console.log('server running on', 'http://localhost:' + 9000)
})
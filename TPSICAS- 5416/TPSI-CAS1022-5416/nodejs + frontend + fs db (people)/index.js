const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const databaseRepo = require('./database-repo').database()

const app = express()

app.use(cors())
app.use(bodyParser.json());

app.get('/people-list', function(req, res){

    res.send(
        databaseRepo.listPeople()
    )
})
app.post('/person-insert', function(req, res){
    databaseRepo.insertPerson(req.body)
    res.send(       
        'ola'
    )
})

app.listen(3000)

const port = 8090
const bodyParser = require('body-parser')
const express = require('express');
const server = express();
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function()
{
    console.log(`Backend is running in port ${port}`)
})


module.exports = server
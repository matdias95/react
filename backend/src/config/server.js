const port = 8090
const bodyParser = require('body-parser')

var express = require('express');
var server = express();

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.listen(port, function()
{
    console.log(`Backend is running in port ${port}`)
})


module.exports = server
const express = require('express')
const app = express();

//GET - used to send and receive from the client side.
//POST - used to send and receive from the client side.
//PUT - used to update data on the server side.
//PATCH - used to update some or specific data on the server side.
//DELETE - used to delete data on the server side.

app.get('/', function(req, res){
    res.json({"success": true, "response" : "This is a test response."})
})

//about endpoint
app.get('/about', function(req, res){
    res.status(200).json({"success": true, "response": "This is an about endpoint or route."})
})

// app.post('/postEndpoint',function(req,res){
//     res.status(200).json({"success": true, "response": "This is an post endpoint."})
// })

app.post('/postEndpoint',function(req,res){
    res.status(404).json({"success": false, "response": "Error"})
})


app.listen(5000, function(){
    console.log('Server is running on http://localhost:5000')
})
const express = require("express");
const { pirndController } = require("./app/controllers/pirndController");
const app = express();


app.get("/", function(req,res){
    res.send("Hello Yapo !!!");
})

app.get("/pi/", function(req,res){
    res.send(pirndController(req, res))
},

)

app.listen(8000, function(){
    console.log("Listening on 8000: http://localhost:8000");
})
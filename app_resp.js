const express = require("express")
const app = express();


app.get("/", function(req,res){
    res.send("Hello Yapo !!!");
})

app.get("/pi/", function(req,res){
    val = Number(req.query.random_limit);
    if(isNaN(val)===true){
        res.send("Debe ingresar un numero");
    }else{
        if(val % 1 !== 0){
            res.send("Solo se permiten enteros");
        }else{
            if(val>15){
                res.send("El maximo de decimales en JS es 15");
            }else{
                num1 = Math.round(val/2);
                num2 = val+1;
                rnd = Math.floor(Math.random() * (num2 - num1) + num1)
                pi = Math.PI.toFixed(rnd)
                res.send("num"+pi);
            }
        }
    }
    //res.send (val);
    //res.send("PI"+req.query.random_limit);
})

app.listen(8000, function(){
    console.log("Listening on 8000: http://localhost:8000");
})
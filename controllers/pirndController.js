exports.pirndController = function(req, res){
    val = Number(req.query.random_limit);
    if(isNaN(val)===true){
        return ("Debe ingresar un numero");
    }else{
        if(val % 1 !== 0){
            return("Solo se permiten enteros");
        }else{
            if(val>15){
                res.send("El maximo de decimales en JS es 15");
            }else{
                num1 = Math.round(val/2);
                num2 = val+1;
                rnd = Math.floor(Math.random() * (num2 - num1) + num1)
                pi = Math.PI.toFixed(rnd)
                return("PI ("+rnd+"): "+pi);
            }
        }
    }
}
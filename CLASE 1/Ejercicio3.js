let pago="tarjeta"
let precio=1000

if(pago=="efectivo"){
    d=precio/10;
    p=precio-d;
    console.log("Su precio descontado es $"+p)
}
else {
    if(pago=="transferencia"){
        console.log("Su precio es de $"+precio)
    }
    else{
        if(pago=="tarjeta"){
            a=precio*0.10;
            t=precio+a;
            console.log("Su aumento es de $"+t)
        
        }
    }
}
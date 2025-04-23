let n=10
if(n<4){
    console.log("Desaprobado")
}
else {
    if(n<=7){
        console.log("Aprobado")
    }
    else{
        if(n>=8 && n<=10){
            console.log("Promocionado")
        }
        else{
            console.log("La nota no es valida")
        }
    }
}
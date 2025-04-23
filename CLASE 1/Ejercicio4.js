function area (base,altura,figura){
    let resultado;
    if(figura=="rectangulo"){
        resultado=base*altura;
    }
    else {
    if(figura=="triangulo"){
        m=base*altura;
        resultado=m/2;
    }
    }
    
    return resultado
}
 console.log(area(10,7,"rectangulo"))
 console.log(area(10,7,"triangulo"))


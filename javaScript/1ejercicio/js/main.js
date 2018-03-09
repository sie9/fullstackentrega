

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3){

    if ( parseInt(p1.age) > parseInt(p2.age) && parseInt(p1.age)>parseInt(p3.age)){
        console.log("p1 es mayor");
        return p1.name;
    }else if (parseInt(p2.age)>parseInt(p1.age) && parseInt(p2.age)>parseInt(p3.age)) {
        console.log("p3 es mayor");
        return p2.name;
    }else if(parseInt(p3.age)>parseInt(p1.age) && parseInt(p3.age)>parseInt(p2.age)){
        console.log("p2 es mayor");
        return p3.name;
    }

}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3){
    if ( p1.email == p2.email || p1.email==p3.email || p2.email==p3.email){
        
        return true;
    }else{
        return false;
    }
}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3){
    
    var edad = prompt('Cual es tu edad?');

    var numEdad = parseInt(edad);
    if (isNaN(numEdad)){
        elUsuarioEsMayorQueLosTres(p1, p2, p3);
    }

    while (isNaN(numEdad)){
    
        var edad = prompt('En numeros!');

        var numEdad = parseInt(edad);
    
    }
    if ( numEdad> parseInt(p1.age) || numEdad > parseInt(p2.age) || numEdad>parseInt(p3.age)){
        return true;
    }else{
        return false;
    }

}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3){
    var i=0;
    if(p1.email.includes("gmail.com")){
        i++;
    }
    if(p2.email.includes("gmail.com")){
        i++;
    }
    if(p3.email.includes("gmail.com")){
        i++;
    }
    if (i==0){
        return "0";
    }else{
        return i;
    }
    
}
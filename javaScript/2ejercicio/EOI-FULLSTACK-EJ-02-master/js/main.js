

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email){
    console.log(email);
    email.toLowerCase();
    if (email=="yunior.developer@hotmail.com" || email=="miguel@mrbug.es" || email=="imanol@mercadona.com"){
        return true;
    }else{
        return false;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email){
    email = email.toLowerCase();
    var aux = 0;
    for(var i = 0; i<email.length;i++){
        if (email.charAt(i)=='m'){
            aux++;
        }
    }
    var texto= "El correo " + email + " tiene " + email.length +
        " caracteres y en mayuscula se quedaria asi: " +
        email.toUpperCase()+ ". Además ";

    if (aux!=0){
        texto = texto + " contiene " + aux + " letras M.";
    }else{
        texto = texto + " no contiene ninguna letra M";
    }
    return texto;
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email){
    var numero = comprobarString(email);

    var dominio= numero.substring(0, numero.length - 1);
    var numero= numero.substring(numero.length - 1);
    var texto= "El correo "+ email + " pertenece al dominio " +
        dominio + " y tiene " + (email.length-dominio.length-1) + " caracteres " +
        " sin contar el dominio ni el @. Ademas ";

    if (numero!=0){
        texto = texto + " contiene " + numero + " numeros.";
    }else{
        texto = texto + " no contiene ningun numero";
    }
    return texto;
}

function comprobarString(email){
    email = email.toLowerCase();
    var dominio;
    var numero =0; 
    for(var i = 0; i<email.length;i++){
        if (email.charAt(i)=='@'){
            dominio= email.substring(i+1,email.length);
        }
        if (!isNaN(email.charAt(i))){
            numero++;
        }
        
    }
    return dominio+numero;
}


////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user){
    var texto;
    texto="El usuario " + user.nombre;
    if (parseInt(user.edad)>=18){
        texto = texto + 
        " es mayor de edad. Por lo tanto, le he creado un usuario con el correo" +
        user.email; 
    }else{
        texto= texto + " no es mayor de edad";
    }
    return texto;
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user){
    var datosYunior = {
        correo : 'yunior@gmail.com',
        nombre : 'Yunior',
        edad : 24
    };

    if ( user.nombre === datosYunior.nombre &&
        user.correo === datosYunior.correo &&
        parseInt(user.edad) === datosYunior.edad){
            return "La persona introducida es Yunior";
    }else{
        if (user.correo == datosYunior.correo) {
            return "La persona introducida pudiera ser Yunior."+
            "Ya que tiene el mismo correo.";
        }else if (user.nombre == datosYunior.nombre) {
            return "La persona introducida pudiera ser Yunior."+
            "Ya que tiene el mismo nombre.";
        }else if (parseInt(user.edad) == datosYunior.edad) {
            return "La persona introducida pudiera ser Yunior."+
            "Ya que tiene la misma edad";
        }
    }
    return "No es yunior";
    
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user){
    var objetito = {
        valid : true,
        errors : []
    };


    comprobarNombre(user,objetito);

    comprobarEmail(user,objetito);

    comprobarEdad(user,objetito);
    
    if (objetito.errors.length==0){
        objetito.valid=true;
    }else{
        objetito.valid=false;
    }
    return objetito;
}

function comprobarNombre(user,objetito){
    if ( user.nombre.length > 5 && user.nombre.length <60){
        var re = /\d/;
        var myArray = user.nombre.match(re);
        if (myArray!=null) {
            objetito.errors.push({code: "Nombre_numeros", text: "El nombre no solo contiene letras y espacios" });
        }
        
    }else{
        objetito.errors.push({code: "Nombre_rangos", text: "Nombre fuera de rango, tiene " + user.nombre.length + " caracteres" });       
    }
    return objetito;
}

function comprobarEmail(user,objetito){
    if ( user.correo.length > 7 && user.correo.length <60){
        var aux2=0;
        for(var i = 0; i<user.correo.length;i++){
            if (user.correo.charAt(i)=='@'){
                aux2++;
                var final= user.correo.substring(i+1,user.correo.length);
                var inicio= user.correo.substring(0,i);
                if (!final.length>0){
                    objetito.errors.push({code: "Email_despues@", text: "No tiene nada despues de la @" });                    
                }
                if (!inicio.length>0){
                    objetito.errors.push({code: "Email_antes@", text: "No tiene nada antes de la @" });                    
                }
                break;
            }
        }
        if(aux2==0){
            objetito.errors.push({code: "Email_sin@", text: "No tiene @" });                        
        }
    }else{
        objetito.errors.push({code: "Email_rango", text: "Email fuera de rango tiene "+user.correo.length + " caracteres." });   
    }
    return objetito;
}

function comprobarEdad(user, objetito){
    if ( !parseInt(user.edad) > 5 && !parseInt(user.edad) <150){
        objetito.errors.push({code: "Edad_rango", text: "Edad fuera de rango tiene " + user.edad + " años."});
    }
    return objetito;
}

////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users){
    console.log(users);

    var arrayUser = {
        items_inserted  : 0,
        ids  : [],
        with_errors  : [],
        users_stored  : []
    };

    recorrerInsertar(users);
    
    return arrayUser;
}


function recorrerInsertar(users){
    users.forEach(element => {
        console.log(element);
        var usuario = ejercicio06(element);
        arrayUser.items_inserted++;
        arrayUser.ids.push(arrayUser.items_inserted);
        arrayUser.with_errors.push(usuario.errors);
        if (usuario.valid){
            arrayUser.users_stored.push(arrayUser.items_inserted);
        } 
    });
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////

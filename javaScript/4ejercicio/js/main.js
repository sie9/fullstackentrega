
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
            objetito.errors.push({code: "name", text: "El nombre no solo contiene letras y espacios" });
        }
        
    }else{
        objetito.errors.push({code: "name", text: "Nombre fuera de rango, tiene " + user.nombre.length + " caracteres" });       
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
                    objetito.errors.push({code: "email", text: "No tiene nada despues de la @" });                    
                }
                if (!inicio.length>0){
                    objetito.errors.push({code: "email", text: "No tiene nada antes de la @" });                    
                }
                break;
            }
        }
        if(aux2==0){
            objetito.errors.push({code: "email", text: "No tiene @" });                        
        }
    }else{
        objetito.errors.push({code: "email", text: "Email fuera de rango tiene "+user.correo.length + " caracteres" });   
    }
    return objetito;
}

function comprobarEdad(user, objetito){
    if (user.edad==""){
        user.edad=0;
    }
    if ( parseInt(user.edad) < 5 ){
        objetito.errors.push({code: "age", text: "Es menor de 5 años"});
    }
    if(parseInt(user.edad) >150 ){
        objetito.errors.push({code: "age", text: "Es mayor de 150 años"});
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

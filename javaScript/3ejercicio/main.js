console.log("Bienvenido al juego de rol");

var user = {nombre : "",
            edad : "",
            sexo : "",
            clase : "",
            vidas : 1000
        };

user.nombre = prompt("Dime tu nombre");
user.edad =prompt("Dime tu edad");
user.sexo =prompt("Dime tu sexo");
user.clase = prompt("Escoge entre ( orco, mago, humano , elfo)");

console.log (user);

var historias = [];
var historia ={ texto :  "",
                minimo_dado : "",
                resultado_si_bien : "",
                resultado_si_mal : ""
};

for(var i=0 ; i<6 ; i++){
    historia.texto = "Mapa "+i;
    historia.minimo_dado = i;
    historia.resultado_si_bien = i;
    historia.resultado_si_mal = i;
    historias.push(Object.assign({},historia));
};

console.log(historias);

var h=0;
while(h<historias.length){
    console.log(historias[h].texto);
    var dadoUser = 10;
    while(dadoUser!=historias[h].minimo_dado){
        if (confirm('Tirar dado?')){
            var dadoUser = Math.floor(Math.random() * 6);
            console.log('Valor del dado: '+dadoUser);
            if (dadoUser===historias[h].minimo_dado){
                user.vidas += historias[h].resultado_si_bien;
                console.log('Pasas de nivel!');
            }else {
                user.vidas -= historias[h].resultado_si_mal;
                console.log('Vuelve a intentarlo');
            }
            
        }
    }
    h++;
}

console.log(user);






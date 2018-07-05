var btn = document.getElementById("mybutton");
btn.addEventListener("click", function () {
    iniciar();
});


function iniciar()
{
    var n1  = prompt (" Digite el numero 1:   ");
    var n2  = prompt (" Digite el numero 2:   ");
    var opera  = prompt (" Que operación desea realizar 1-Suma 2-Resta 3-Multiplicación 4-División  ");
   
    if (opera == "1"){  
        var result = suma(n1, n2);
    
    } else if (opera == "2") {         
        var result = resta(n1, n2);
        
    } else if (opera == "3"){
        var result = multip(n1, n2);
    } else {
        var result = divi(n1, n2);
    }
    
   document.getElementById("resultado").innerHTML = result;
}


function suma(numero1, numero2) {
    
    var n1 = numero1;
    var n2 = numero2;
    var suma = parseInt(n1) + parseInt(n2);
    return suma;
}


function resta(numero1, numero2) {
    return parseInt(numero1) - parseInt(numero2);
}


function multip(numero1, numero2) {
    return parseInt(numero1) * parseInt(numero2);
}


function divi(numero1, numero2) {
   
    return parseInt(numero1) /

        parseInt(numero2);
}


            
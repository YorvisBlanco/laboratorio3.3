// paso 1 : declaracion de variable

let num1, num2;
let operacion;

// paso 2 : funcion para crear una variable

function realizarOperacion(num1, num2, operacion){  //inicializacion de las variables
    if(operacion === "suma"){   //condicional para la suma
        return num1 + num2 ;    //operacion para sumar

    } else if (operacion === "resta"){  //condicional para la resta
        return num1 - num2;
    } else if (operacion === "multiplicacion"){
        return num1 * num2;
    } else if (operacion === "division"){
        if (num2 === 0 ){
            return "error division por cero no permitida"
        }
         return num1 * num2;
    } else {
        return "operacion no valida"
    }
}

// paso 3 bucle para realizar multiples operaciones

while (true){
    //solicitar al usuario el primer num
    num1 = parseFloat(prompt("ingrese el primer numero( o escriba salir para terminar)"));

    //si la entrada no es un numero termine el bucle
    if(isNaN(num1)){
        console.log("adios.");
        break;
    }

    //solicitar al usuario que ingrse el numero 2
    num2 = parseFloat(prompt("ingrese el segundo numero"));

    // si el segundo numero no es valido
    if(isNaN(num2)){
        console.log("por favor ingrese un numero valido");
        continue; //regresa al inicio del bucle

    }

    //solicita al usuario que ingrese la operacion deseado

    operacion = prompt ("ingrese la operacion (suma, resta, multiplicacion, division,)");

    // si el usuario ingresa salir terminar bucle
    if(operacion === "salir"){
        console.log("adios.");
    }
    //llama la funcion operaciones 
    const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());

    console.log(`resultado: ${resultado}`);
    
}
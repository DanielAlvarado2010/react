import React from 'react';



function Calculator({ numeroA, numeroB, operador }) {

    if (Number.isInteger(numeroA)){

let numeroC = 0;

switch (operador){
    case "suma":
     numeroC = numeroA + numeroB;
        break;
    case "multiplicacion":
     numeroC = numeroA * numeroB;
        break;
    case "resta":
     numeroC = numeroA - numeroB;
        break;
    case "division":
     numeroC = numeroA / numeroB;
        break;
        default: 
        return (
            <div>
                <h1>El operador no es valido</h1>
            </div>
        );
}
    return (
        <div>
            <h1>El resultado de la {operador} de los numeros {numeroA} y {numeroB} es {numeroC}</h1>
        </div>
    );
    } else {
        return (
            <div>
                <h1>Alguno de los operadores no es un numero</h1>
            </div>
        );
        }

}

export default Calculator;

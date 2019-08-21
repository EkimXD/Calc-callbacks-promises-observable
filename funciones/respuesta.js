const {of, from} = require('rxjs');
const {map, mergeMap} = require('rxjs/operators');

module.exports.retornaResultado=(funcionesCPO, operacion, numero1, numero2) =>{
    let variableAux=definirOperacion(funcionesCPO, operacion, numero1, numero2);
    const resultado$=from(variableAux);
    resultado$.subscribe((resultado)=>{
        console.log('El resultado es: ',resultado);
    },(error)=>{
        console.log(error);
    });
};

function definirOperacion(funcionesCPO, operacion, numero1, numero2) {
    let variableAux;
    switch (operacion) {
        case 'suma':
            variableAux=funcionesCPO.suma(numero1,numero2);
            break;
        case 'resta':
            variableAux=funcionesCPO.resta(numero1,numero2);
            break;
        case 'multiplica':
            variableAux=funcionesCPO.multiplica(numero1,numero2);
            break;
        case 'divide':
            variableAux=funcionesCPO.divide(numero1,numero2);
            break;
    }
    return variableAux;
}
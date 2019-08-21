const {sumar, restar, multiplicar, dividir} = require('../calculadora/funcionesCalc');

module.exports.operacionesXPromesas = {
    suma: (numero1, numero2) => promesa(sumar, numero1, numero2),
    resta: (numero1, numero2) => promesa(restar(numero1, numero2)),
    multiplica: (numero1, numero2) => promesa(multiplicar, numero1, numero2),
    divide: (numero1, numero2) => promesa(dividir(numero1, numero2))
};

function promesa(funcion, numero1, numero2) {
    return new Promise((accept, reject) => {
        if (!numero1 || !numero2) {
            reject('Error, entrada incorrecta');
        } else {
            accept(funcion(numero1, numero2));
        }
    })
}
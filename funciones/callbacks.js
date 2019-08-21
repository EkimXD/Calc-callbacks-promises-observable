const {sumar, restar, multiplicar, dividir} = require('../calculadora/funcionesCalc');

const callback = (funcion, numero1, numero2) => funcion(numero1, numero2);

module.exports.operacionesCallback = {
    suma: (numero1, numero2) => callback(sumar, numero1, numero2),
    resta: (numero1, numero2) => callback(restar, numero1, numero2),
    multiplica: (numero1, numero2) => callback(multiplicar, numero1, numero2),
    divide: (numero1, numero2) => callback(dividir, numero1, numero2),
};

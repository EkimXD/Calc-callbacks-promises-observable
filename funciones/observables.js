const {sumar, restar, multiplicar, dividir} = require('../calculadora/funcionesCalc');
const {of,from}=require('rxjs');
const {map, mergeMap}=require('rxjs/operators');

module.exports.operacionesObservables= {
    suma: (numero1, numero2) => of(sumar(numero1, numero2)),
    resta: (numero1, numero2) => of(restar(numero1, numero2)),
    divide: (numero1, numero2) => of(dividir(numero1, numero2)),
    multiplica: (numero1, numero2) => of(multiplicar(numero1, numero2)),
};

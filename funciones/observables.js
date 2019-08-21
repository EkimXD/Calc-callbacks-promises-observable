const {sumar, restar, multiplicar, dividir} = require('../calculadora/funcionesCalc');
const {of,from}=require('rxjs');
const {map, mergeMap}=require('rxjs/operators');

const operacionesObservables={
  suma:(numero1, numero2)=>{
      return
  }
};
const sumar$=from(sumar());

const {of, from} = require('rxjs');
const {map, mergeMap} = require('rxjs/operators');

function retornaResultado(funcionesCPO, operacion, numero1, numero2) {
    const observable$ = of(funcionesCPO.suma(numero1, numero2));

    observable$.subscribe((resultado) => {
        return resultado;
    }, (error) => {
        return error;
    })
}
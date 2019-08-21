const prompts = require('prompts');
const {retornaResultado}=require('../funciones/respuesta')

module.exports.rutina = (funciones) => {
    (async () => {
        const pantalla1 = await prompts({
            type: 'select',
            name: 'value',
            message: 'Que operacion desea ejecutar?',
            choices: [
                {title: 'Sumar dos numeros', value: 'suma'},
                {title: 'Restar dos numeros', value: 'resta'},
                {title: 'Multiplicar dos numeros', value: 'multiplica'},
                {title: 'Dividir dos numeros', value: 'divide'}
            ],
            initial: 0
        });

        const pantalla2 = await prompts([
            {
                type: 'number',
                name: 'numero1',
                message: 'Ingrese el primer numero: '
            },
            {
                type: 'number',
                name: 'numero2',
                message: 'Ingrese el segundo numero: '
            }
        ]);
        retornaResultado(funciones, pantalla1.value, pantalla2.numero1, pantalla2.numero2);
    })();
};
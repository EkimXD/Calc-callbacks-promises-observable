const prompts= require('prompts');
const {event}=require('../eventos/eventos');

(async ()=>{
    const pantallaPrincipal=await prompts({
        type: 'select',
        name: 'value',
        message: 'Como desea ejecutar su operacion?',
        choices: [
            { title: 'Por Callbacks', value: 'callback' },
            { title: 'Por Promesas', value: 'promesa' },
            { title: 'Por Callbacks', value: 'observable' }
        ],
        initial: 0
    });
    event.emit(pantallaPrincipal.value);
})();
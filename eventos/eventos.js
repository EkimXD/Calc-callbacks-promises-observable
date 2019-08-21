const EventEmiter= require('events');
const event=new EventEmiter();
const {rutina}=require('../front/secundaria');
const {operacionesCallback}=require('../funciones/callbacks');
const {operacionesXPromesas}=require('../funciones/promesas');
const {operacionesObservables}=require('../funciones/observables');

event.on('callback',()=>{rutina(operacionesCallback)});
event.on('promesa',()=>{rutina(operacionesXPromesas)});
event.on('observable',()=>{rutina(operacionesObservables)});

module.exports.event=event;


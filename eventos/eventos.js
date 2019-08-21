const EventEmiter= require('events');
const event=new EventEmiter();

event.on('callback',()=>{});
event.on('promesa',()=>{});
event.on('observable',()=>{});

module.exports.event=event;


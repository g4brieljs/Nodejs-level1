/* 

Module System Operate
Learning with Fazt
Name: Gabriel Jiménez
QuickName: GabrielJS

*/

const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem(), 'bytes');
console.log('Total mem: ', os.totalmem(), 'bytes');
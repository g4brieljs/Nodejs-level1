/*
 
 Modulo File System 
 Learning with Fazt
 Name: Gabriel Jiménez
 QuickName: GabrielJS

*/

const fs = require('fs');

// Callback, Código Asincrono
fs.writeFile('./texto.txt', 'linea uno', function(err){
    if (err){
        console.log(err);
    }
    console.log('Archivo Creado');
});
// El código debajo del código Asíncrono se verá aunque el archivo no sea haya creado.
console.log("Código debajo de Código Asíncrono");

// Código Bloqueante
const result = fs.writeFile('', '');
// El código debajo del código bloqueante se verá una vez creado el Archivo.

// Module FS, but with readFile

const fs = require('fs');

fs.readFile('./texto.txt', function(err){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
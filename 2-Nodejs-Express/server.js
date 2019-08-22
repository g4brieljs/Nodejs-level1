// Using framework Express

// First we can create a var, where this Express
// require only exist in the back-end
// import {express} from require("express");
const express = require("express");
// 
const app = express();

app.get("/", inicio);
app.get("/curso", cursos);


function inicio(peticion, resultado){
    resultado.send("Este es el <srong>home</strong>")
}

function cursos(peticion, resultado){
    resultado.send("Este son los <srong>cursos</strong>")
}

// Run server

app.listen(8989);
"use strict";
//Funciones básicas
function sumar(a, b) {
    return a + b;
}
;
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
//Parámetros por defecto
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log('Batiseñal activada');
    }
    ;
};
llamarBatman();
//Rest?
var unirHeroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(', ');
};
//Tipos de función
var noHaceNada = function (numero, texto, booleano, arreglo) { };
// Crear el tipo de función que acepte la función 'noHaceNada'
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;

/**
 * FÚTBOL
Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar y 0 es
perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1
la salida requerida presenta el siguiente formato:
Ganaste el 66.67% de los juegos
 */

import CL_juego from "./Juego.js";
import CL_Resultados from "./Resultado.js";

let juego1 = new CL_juego(1);
let juego2 = new CL_juego(1);
let juego3 = new CL_juego(0);
let juego4 = new CL_juego(1);
let juego5 = new CL_juego(0);
let juego6 = new CL_juego(1);
let juego7 = new CL_juego(1);

let resul = new CL_Resultados()

resul.procesarJuegos(juego1);
resul.procesarJuegos(juego2);
resul.procesarJuegos(juego3);
resul.procesarJuegos(juego4);
resul.procesarJuegos(juego5);
resul.procesarJuegos(juego6);
resul.procesarJuegos(juego7);

let salida = document.getElementById("salida");
salida.innerHTML =`
Se ganaron el ${(resul.porcGanado()).toFixed(2)}% de los juegos
`


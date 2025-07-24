/**
 * JUEGO DE CARTAS
En el juego a cada participante se le entregan 3 cartas numeradas del 1 al 12, gana quien
sume mayor puntuación. Se desea conocer a) la puntuación de cada participante, b) el nombre
del ganador, c) el porcentaje de jugadores con menos de 10 puntos.
Se tiene que el formato para la salida de los requerimientos solicitados es:
El participante Juan tiene una puntuación de 8
El participante José tiene una puntuación de 14
El participante Rosa tiene una puntuación de 27
Nombre del ganador: Rosa
Porcentaje de jugadores con menos de 10 puntos:33.33%
 */

import CL_Participante from "./Participante.js";
import CL_Juego from "./Juego.js";

let participante1 = new CL_Participante("juan", 8);
let participante2 = new CL_Participante("Jose", 14);
let participante3 = new CL_Participante("rosa", 27);

let jue = new CL_Juego();

jue.procesarParticipante(participante1);
jue.procesarParticipante(participante2);
jue.procesarParticipante(participante3);

let salida = document.getElementById("salida")

salida.innerHTML =
`Informe
<br>El participante ${participante1.nombre} tiene una puntuación de ${participante1.puntos}
<br>El participante ${participante2.nombre} tiene una puntuación de ${participante2.puntos}
<br>El participante ${participante3.nombre} tiene una puntuación de ${participante3.puntos}
<br>
<br>Nombre del Ganador: ${jue.nombreWiner()}
<br>
<br>Porcentaje de jugadores con menos de 10 puntos: ${(jue.porcMenores10()).toFixed(2)}%
`
/**
 * CONTADOR DE PERSONAS
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7
 */

import CL_persona from "./Persona.js";
import CL_Contador from "./Contador.js";

let persona1 = new CL_persona("Luisa", "F");
let persona2 = new CL_persona("Ana", "F");
let persona3 = new CL_persona("Jose", "M");
let persona4 = new CL_persona("Carmen", "F");
let persona5 = new CL_persona("Rosa", "F");
let persona6 = new CL_persona("Jose", "M");
let persona7 = new CL_persona("Maria", "F");
let persona8 = new CL_persona("Luz", "F");
let persona9 = new CL_persona("Rafael", "M");
let persona10 = new CL_persona("Liz", "F");
let persona11 = new CL_persona("Marcos", "M");
let persona12 = new CL_persona("Leo", "M");

let cont = new CL_Contador();

cont.procesarPersona(persona1);
cont.procesarPersona(persona2);
cont.procesarPersona(persona3);
cont.procesarPersona(persona4);
cont.procesarPersona(persona5);
cont.procesarPersona(persona6);
cont.procesarPersona(persona7);
cont.procesarPersona(persona8);
cont.procesarPersona(persona9);
cont.procesarPersona(persona10);
cont.procesarPersona(persona11);
cont.procesarPersona(persona12);

let salida = document.getElementById("salida")

salida.innerHTML = `informe
<br>Cantidad de personas: ${cont.totalPers()}
<br>Cantidad de hombres: ${cont.hombres()}
<br>Cantidad de mujeres: ${cont.mujeres()}
`
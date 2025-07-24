/**
 * MAYORES DE EDAD
Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final el porcentaje de personas que son mayores de edad.
Se tienen las siguientes personas: 
Luis (15)
Ana (19)
José (21)
Carmen (17)
Rosa (18)
José (22)
María (17)
Luz (19)
Rafael (23)
Liz (15)
Marcos (20) 
Leo (16) 
la salida requerida
presenta el siguiente formato:
Cantidad de personas: 12
Cantidad de personas mayor de edad: 7
Porcentaje de personas mayor de edad: 58.33%
 */

import CL_Persona from "./Persona.js";
import CL_MayoresEdad from "./MayoresEdad.js";

let pers1 = new CL_Persona("Luis",15),
pers2 = new CL_Persona("Ana",19),
pers3 = new CL_Persona("José",21),
pers4 = new CL_Persona("Carmen",17),
pers5 = new CL_Persona("Rosa",18),
pers6 = new CL_Persona("José",22),
pers7 = new CL_Persona("María",17),
pers8 = new CL_Persona("Luz",19),
pers9 = new CL_Persona("Rafael",23),
pers10 = new CL_Persona("Liz",15),
pers11 = new CL_Persona("Marcos",20),
pers12 = new CL_Persona("Leo",16);

let may = new CL_MayoresEdad();

may.procesarPersona(pers1);
may.procesarPersona(pers2);
may.procesarPersona(pers3);
may.procesarPersona(pers4);
may.procesarPersona(pers5);
may.procesarPersona(pers6);
may.procesarPersona(pers7);
may.procesarPersona(pers8);
may.procesarPersona(pers9);
may.procesarPersona(pers10);
may.procesarPersona(pers11);
may.procesarPersona(pers12);

let salida = document.getElementById("salida")

salida.innerHTML = `
Cantidad de personas: ${may.cntPers}
<br>Cantidad de personas mayor de edad: ${may.cntMayor18}
<br>Porcentaje de personas mayor de edad: ${(may.porcPersMay18()).toFixed(2)}%
`
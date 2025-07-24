/**RESULTADOS MATERIA
Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Cantidad de aprobados: 6
Cantidad de reprobados: 2
 Nota promedio de la sección: 57.25*/

import CL_Estudiante from "./CL_Estudiante.js";
import CL_Materia from "./CL_Materia.js";

let Est1 = new CL_Estudiante(888, 60);
let Est2 = new CL_Estudiante(777, 50);
let Est3 = new CL_Estudiante(999, 40);
let Est4 = new CL_Estudiante(333, 80);
let Est5 = new CL_Estudiante(111, 30);
let Est6 = new CL_Estudiante(666, 90);
let Est7 = new CL_Estudiante(444, 48);
let Est8 = new CL_Estudiante(222, 60);

let materia = new CL_Materia();
materia.procesarEstudiante(Est1);
materia.procesarEstudiante(Est2);
materia.procesarEstudiante(Est3);
materia.procesarEstudiante(Est4);
materia.procesarEstudiante(Est5);
materia.procesarEstudiante(Est6);
materia.procesarEstudiante(Est7);
materia.procesarEstudiante(Est8);

let salida = document.getElementById("salida");

salida.innerHTML = `
<br> Cantidad de aprobados: ${materia.EstAprobados()}
<br> Cantidad de reprobados: ${materia.EstReprobados()}
<br><br >Nota promedio de la sección: ${materia.PromSección()} `
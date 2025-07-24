/*
ESTUDIANTE-A
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.

Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a
15, ó recibe $20 si es al menos 10; si el promedio es menor de 10, no recibe beca.

Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un
estudiante y reporte el monto de la beca, o si no le corresponde beca.
Ejemplos de la corrida:

Nombre del estudiante: Mary
Acumulado de notas: 132
Cantidad de materias: 8
Nota promedio: 16.50
Mary recibe una beca de $30.00

Nombre del estudiante: Alirio
Acumulado de notas: 315
Cantidad de materias: 35
Nota promedio: 9.00
Alirio no le corresponde beca
*/

import Becado from "./CL_Becado.js";

export default class CL_Main {
    constructor() {
        let beca1 = new Becado("Mary", 132, 8),
            beca2 = new Becado("Alirio", 315, 35);

            let salida = document.getElementById("salida")
            salida.innerHTML = `
            <br>Nombre del estudiante: ${beca1.nombre}
            <br>Acumulado de notas: ${beca1.notaTotal}
            <br>Cantidad de materias: ${beca1.cantMaterias}
            <br>Nota promedio: ${beca1.promNotas()}
            <br>recibe una beca de: ${beca1.beca()}$
            <br>
            <br>Nombre del estudiante: ${beca2.nombre}
            <br>Acumulado de notas: ${beca2.notaTotal}
            <br>Cantidad de materias: ${beca2.cantMaterias}
            <br>Nota promedio: ${beca2.promNotas()}
            <br> recibe una beca de: ${beca2.beca()}
            `
    }
}
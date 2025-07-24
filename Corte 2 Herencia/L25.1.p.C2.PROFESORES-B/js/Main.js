/*
PROFESORES-B
En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total.

Ejemplos de la corrida:
Nombre del profesor contratado: Rafael
Monto del bono: $30
Cantidad de horas: 15
Ingreso total del profesor Rafael: $180

Nombre del profesor contratado: Felicia
Monto del bono: $30
Cantidad de horas: 20
Ingreso total del profesor Felicia: $230
*/

import Cl_Contratado from "./CL_Contratado.js";

export default class CL_Main {
    constructor() {
        let contrac1 = new Cl_Contratado("Rafael", 30, 15),
        contrac2 = new Cl_Contratado("Felicia", 30, 20);

        let salida = document.getElementById("salida")
        salida.innerHTML = `
        Ejemplos de la corrida:
    <br>Nombre del profesor fijo: ${contrac1.nombre}
    <br>Monto del bono: ${contrac1.bono}$
    <br>Monto del sueldo: ${contrac1.horas}$
    <br>Ingreso total del profesor Carlos: ${contrac1.sueldoTotal()}$
    <br>
    <br>Nombre del profesor fijo: ${contrac2.nombre}
    <br>Monto del bono: ${contrac2.bono}$
    <br>Monto del sueldo: ${contrac2.horas}$
    <br>Ingreso total del profesor Carolina: ${contrac2.sueldoTotal()}$
        `
    }



}
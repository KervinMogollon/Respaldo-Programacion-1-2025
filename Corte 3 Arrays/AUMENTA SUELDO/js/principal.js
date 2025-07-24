/*
AUMENTA SUELDO
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
personal administrativo. Se conoce de cada empleado su cédula, sueldo actual y el tipo de
empleado (1-Obrero, 2-Administrativo). Al procesar todos los empleados, 
la empresa desea saber: 
a) el nuevo sueldo de cada empleado, 
por la empresa: 
b) el monto total que deberá pagar sólo por concepto de incremento de sueldo a todo el personal
c) el porcentaje de personal obrero.

La empresa entrega la siguiente información como referencia del reporte de salida requerido:

La cédula 555 tiene nuevo sueldo de $220
La cédula 888 tiene nuevo sueldo de $600
La cédula 777 tiene nuevo sueldo de $440
La cédula 666 tiene nuevo sueldo de $720
La cédula 444 tiene nuevo sueldo de $960

Total a pagar sólo por aumento de sueldo: $440
Porcentaje de personal obrero: 60%

Aclarando que la cédula 555 es de un administrativo con sueldo actual de 200, el 888 es
obrero con sueldo actual de 500, el 777 administrativo con 400, el 666 es obrero con sueldo
actual de 600, y el 444 es obrero con 800
*/

import Trabajador from "./Cl_Trabajador.js";
import empresa from "./Cl_Empresa.js";


export default class principal {
    constructor() {
        let empre = new empresa();

        empre.agregarTrabajador(new Trabajador("555", 200, 2));
        empre.agregarTrabajador(new Trabajador("888", 500, 1));
        empre.agregarTrabajador(new Trabajador("777", 400, 2));
        empre.agregarTrabajador(new Trabajador("666", 600, 1));
        empre.agregarTrabajador(new Trabajador("444", 800, 1));
        empre.agregarTrabajador(new Trabajador("333", 520, 2));
        empre.agregarTrabajador(new Trabajador("222", 330, 1));
        empre.agregarTrabajador(new Trabajador("111", 170, 2));
        empre.agregarTrabajador(new Trabajador("000", 250, 1));

        let salida = document.getElementById("salida");
        salida.innerHTML += `
        <br>Total a pagar sólo por aumento de sueldo: ${empre.totalSoloAumento()}$
        <br>Porcentaje de personal obrero: ${(empre.porcObreros().toFixed(2))}%
        <br>Porcentaje de personal Administrativo: ${(empre.porcAdministrativos().toFixed(2))}%
       
        `

        let tabla = document.getElementById("tabla")
        tabla.innerHTML = ` 
            <tr>
                <th>Cedula</th>
                <th>Sueldos Anterior</th>
                <th>Nuevo Suelo</th>
                <th>Tipo de trabajador</th>
            </tr>`;
        empre.sueldoNuevo().forEach((n) => {
            tabla.innerHTML += `
            <tr>
                <td>${n.cedula}</td>
                <td>${n.AnteriorSueldo}$</td>
                <td>${n.sueldoNuevo}$</td>
                <td>${n.tipoTrabajador}</td>
            </tr>
            `
        })
    }
}

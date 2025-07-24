/**
ARTÍCULOS
Sea la información de un artículo:
nombre, cantidad y precio base. Se
espera que los artículos tengan un
descuento, pero eso dependerá de
cada departamento.

El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para
edad de 1 año.
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva
clase sólo amerita edad y descuento().
Realice un programa que lea los datos de un juguete y reporte el monto a pagar.

Ejemplos de la corrida:
Nombre del juguete: carrito
Cantidad: 2
Precio base: $10
Edad recomendada: 2
Monto a pagar por el carrito: $20.00

Nombre del juguete: peluche
Cantidad: 3
Precio base: $20
Edad recomendada: 1
Monto a pagar por el peluche: $54.00
 */

import Cl_juguetes from "./CL_Dptojugetes.js";

export default class CL_Main {
    constructor() {

        let juge1 = new Cl_juguetes("Carrito", 2, 10, 2),
            juge2 = new Cl_juguetes("Peluche", 3, 20, 1);

        let salida = document.getElementById("salida")

        salida.innerHTML = `
            <br>Nombre del juguete: ${juge1.nombre}
            <br>Cantidad: ${juge1.cantidad}
            <br>Precio base: ${juge1.precioBase}$
            <br>Edad recomendada: ${juge1.edad}
            <br>Monto a pagar por el carrito: ${juge1.montPagar()}$
            <br>
            <br>Nombre del juguete: ${juge2.nombre}
            <br>Cantidad: ${juge2.cantidad}
            <br>Precio base: ${juge2.precioBase}$
            <br>Edad recomendada: ${juge2.edad}
            <br>Monto a pagar por el carrito: ${juge2.montPagar()}$
            `
    }
}
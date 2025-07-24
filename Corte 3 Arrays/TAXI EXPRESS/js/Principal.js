/*
La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, por
el aumento de su cartera de clientes, necesita un sistema automatizado que le permita llevar
ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre,
tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo (1. Masculino o 2.Femenino). 

Es significativo para la empresa, obtener un reporte que contenga: 
a) Cantidad de clientes femeninas mayores de edad, 
b) cuál ha sido la menor edad atendida, 
c) promedio de edad de los clientes.

Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que 
Juan (20 años) tomó servicio corto, 
Ana (19) largo, 
Lin (18) corto, 
Mary (15) largo
juana (15 años) tomó servicio corto,

Cantidad de clientes femeninas mayores de edad: 2
La menor edad atendida fue de 15 años
El promedio de edad de los clientes es de 18 años
*/

import cliente from "./CL_Cliente.js";
import empresa from "./CL_Empresa.js";

export default class Principal {
    constructor() {
        let empre = new empresa();

        empre.agregarCliente(new cliente("Juan", 1, 20, 1));
        empre.agregarCliente(new cliente("Ana", 2, 19, 2));
        empre.agregarCliente(new cliente("Lin", 1, 18, 2));
        empre.agregarCliente(new cliente("Mary", 2, 15, 2));
        empre.agregarCliente(new cliente("Juana", 1, 15, 2));
        empre.agregarCliente(new cliente("Pedro", 1, 25, 1));
        empre.agregarCliente(new cliente("Luis", 2, 30, 1));
        empre.agregarCliente(new cliente("Eva", 2, 22, 2));
        empre.agregarCliente(new cliente("Ray", 1, 28, 1));
        empre.agregarCliente(new cliente("Sofia", 2, 17, 2));
        empre.agregarCliente(new cliente("Carlos", 1, 35, 1));
        empre.agregarCliente(new cliente("Laura", 2, 21, 2));
        empre.agregarCliente(new cliente("Andres", 1, 16, 1));
        empre.agregarCliente(new cliente("María", 2, 16, 2));
        empre.agregarCliente(new cliente("Javier", 1, 19, 1));
        empre.agregarCliente(new cliente("Patricia", 2, 18, 2));
        empre.agregarCliente(new cliente("Fernando", 1, 20, 1));
        


        let salida = document.getElementById("salida");
        salida.innerHTML += `
        <br>Cantidad de clientes femeninas mayores de edad: ${empre.cantidadFemeninasMayoresEdad()}
        <br>La menor edad atendida fue de ${empre.menorEdad()} años
        <br>El nombre de la menor edad atendida es: ${empre.quienEsMenor().map((c) =>
                                                                            c.nombre)}
        <br>El promedio de edad de los clientes es de ${(empre.promedioEdad()).toFixed(2)} años
        `


    }
}
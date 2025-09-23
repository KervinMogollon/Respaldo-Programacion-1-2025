/**
El Colegio "Virgen de Coromoto" desea contratar sus servicios para que le elabore un software que le permita llevar el 
control de las inscripciones de sus estudiantes, de tal manera que se pueda informar entre otras cosas, cuál es el monto 
total que se debe cancelar.

El administrador del colegio indica que por cada estudiante que se inscriba se cuenta con la cédula, nombre, mes en que está
realizando la inscripción, donde (1:Julio y 2:Septiembre), nivel que va a cursar, donde: (1:Primaria y 2:Bachillerato). Así mismo,
se sabe que el monto de la inscripción para un estudiante de Primaria es de 50$ y Bachillerato es de 100$. Es importante resaltar,
que para los estudiantes que van a cursar Bachillerato, además del monto de la inscripción, se debe cancelar un monto adicional por
el material del curso de inglés el cual es de 20$.

El Colegio inicia las inscripciones con un monto disponible en caja, y también se sabe que se maneja un descuento de 20% sobre
el monto de la inscripción (sole para inscripciones en el mes de Julio).

Coda vez que se termine de procesar la inscripción del estudiante, se debe mostrar su cedula, nombre, monto de descuento y
monto total a cancelar.

Además, es significativo para el colegio conocer: i) el porcentaje de representantes que realizaron la inscripción en el
mes de Julio, con respecto al total de representantes que realizaron inscripción, y ii) el monto final que queda en caja

El administrador del colegio informa que inicia las inscripciones con un monto en caja de $500, у procesa los siguientes 
clientes: 
(cedula, nombre, mes, nivel), 
(111, Pedro, 1, 1), 
(222, Ana, 2, 2), 
(333, Luis, 1, 2), 
(444, Rita, 2, 1), 
(555, Juan, 1, 1),
 */

import CL_mColegio from "./mColegio.js";
import CL_vColegio from "./vColegio.js";
import CL_Controlador from "./Controlador.js";

export default class CL_Principal {
    constructor() {
        let modelo = new CL_mColegio(),
            vista = new CL_vColegio(),
            controlador = new CL_Controlador(modelo, vista);

        vista.controlador = controlador
    }
}
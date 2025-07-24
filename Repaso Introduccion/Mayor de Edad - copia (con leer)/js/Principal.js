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

let may = new CL_MayoresEdad();
let salida = document.getElementById("salida");

let opc = 1;
while (opc == 1) {

    let per = new CL_Persona(),
        nombre = per.leerNombre(),
        edad = per.leerEdad();

    let pers = new CL_Persona(nombre, edad)
    nombre = pers.nombre,
        edad = pers.edad;

    may.procesarPersona(pers)

    opc = per.solicitarOpc();

}

salida = document.getElementById("salida")

salida.innerHTML = `
Cantidad de personas: ${may.cntPers}
<br>Cantidad de personas mayor de edad: ${may.totalPersMay18()}
<br>Porcentaje de personas mayor de edad: ${(may.porcPersMay18()).toFixed(2)}%

`
/*3. EDAD PERSONAS 
3. Conociendo la edad de varias personas, indicar la edad promedio. 
Ej.  Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: 
La edad promedio es 17*/ 
import CL_Edad from "./CL_Edad.js";
import CL_Persona from "./CL_Persona.js";

let Edad1 = new CL_Edad(15); 
let Edad2 = new CL_Edad(14); 
let Edad3 = new CL_Edad(19); 
let Edad4 = new CL_Edad(20); 
let Edad5 = new CL_Edad(16); 
let Edad6 = new CL_Edad(18); 

let persona = new CL_Persona(); 
persona.procesarEdad(Edad1); 
persona.procesarEdad(Edad2); 
persona.procesarEdad(Edad3); 
persona.procesarEdad(Edad4); 
persona.procesarEdad(Edad5); 
persona.procesarEdad(Edad6); 
let salida = document.getElementById("salida");
salida.innerHTML = `<br> La edad promedio es ${persona.calcularPromedio()}`
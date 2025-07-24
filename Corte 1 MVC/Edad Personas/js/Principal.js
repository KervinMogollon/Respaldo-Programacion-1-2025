/*3. EDAD PERSONAS 
3. Conociendo la edad de varias personas, indicar la edad promedio. 
Ej.  Edades de las personas es: 15, 14, 19, 20, 16 y 18 
La salida requerida presenta el siguiente formato: 
La edad promedio es 17*/ 

import CL_mPersona from "./CL_mPersona.js";
import CL_vPersona from "./CL_vPersona.js";
import CL_Controlador from "./CL_Controlador.js";

export default class CL_Principal{
    constructor() {
        let modelo = new CL_mPersona();
        let vista = new CL_vPersona();
        let controlador = new CL_Controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
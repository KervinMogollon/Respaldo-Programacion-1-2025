/**
 * INTRO2-HERENCIA
Tomando la Cl_padre del ejercicio anterior, crea la clase Cl_hijo1, que herede de Cl_padre,
con el atributo atrib1, y la clase Cl_hijo2, que herede de Cl_padre, con el atributo atrib2.
Cl_hijo1 tiene el método calculo() que multiplica atribA con atrib1; Cl_hijo2 tiene el método
calculo() que suma atribA con atrib2.
 */

import CL_Hija1 from "./CL_ClajeHija1.js";
import CL_Hija2 from "./CL_ClajeHija2.js";

export default class CL_Main {
    constructor() {

        let hija1A = new CL_Hija1(1, 2),
            hija2A = new CL_Hija2(3, 4);
    }
}
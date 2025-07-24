/**
 * INTRO3-HERENCIA
Sea la clase Cl_empleado con atributo sueldoBase y método calcularSueldo(), que sólo
retorna sueldoBase. La clase Cl_obrero hereda de Cl_empleado y también tiene horas extras a
$2 cada una; la clase Cl_administrativo hereda de Cl_empleado y tiene una prima fija. El
método calcularSueldo() debe hacer lo indicado en cada clase hija.
Ej.
- calcularSueldo() en obrero es: this.sueldoBase + this.horasExtras * 2
- calcularSueldo() en administrativo es: this.sueldoBase + this.primaFija
 */

import Cl_Obrero from "./CL_Obrero.js";
import Cl_Administrativo from "./CL_Administrativo.js";

export default class CL_Main{
    constructor() {
        let obrero1 = new Cl_Obrero(200, 5),
        admin1 = new Cl_Administrativo(230, 20);
    }
}
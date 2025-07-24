import Cl_empleado from "./CL_Empleado.js";

export default class Cl_Obrero extends Cl_empleado {
    constructor(sueldoBase, horasExtras) {
        super(sueldoBase);
        this.horasExtras = horasExtras;
    }

    calcularSueldo(){
       return this.sueldoBase + (this.horasExtras * 2)
    }
}
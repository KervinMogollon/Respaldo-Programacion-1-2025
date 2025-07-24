import Cl_empleado from "./CL_Empleado.js";

export default class Cl_Administrativo extends Cl_empleado {
    constructor(sueldoBase, primaFija) {
        super(sueldoBase);
        this.primaFija = primaFija;
    }

    calcularSueldo(){
       return this.sueldoBase + this.primaFija 
    }
}
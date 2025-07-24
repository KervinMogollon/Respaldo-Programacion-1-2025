import Cl_Profesor from "./CL_Profesor.js";

export default class Cl_Fijo extends Cl_Profesor{
    constructor(nombre, bono, sueldo) {
        super(nombre, bono);
        this.sueldo = sueldo;
    }

    sueldoTotal(){
        return this.bono + this.sueldo;
    }
}
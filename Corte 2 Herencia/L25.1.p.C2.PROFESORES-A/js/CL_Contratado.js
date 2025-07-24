import Cl_Profesor from "./CL_Profesor.js";

export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre, bono, horas) {
        super(nombre, bono);
        this.horas = horas;
    }

    sueldoTotal(){
        return this.bono + (this.horas * 10);
    }
}

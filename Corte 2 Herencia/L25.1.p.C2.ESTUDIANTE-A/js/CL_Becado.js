import Estudiante from "./CL_Estudiante.js";

export default class Becado extends Estudiante {
    constructor(nombre, notaTotal, cantMaterias) {
        super(nombre, notaTotal, cantMaterias);
    }

    beca() {
        if (this.promNotas() > 15) {
            return 30
        }
        else if (this.promNotas() <= 15 && this.promNotas >= 10) {
            return 20
        }
        else
            return "no le corresponde beca"
    }
}
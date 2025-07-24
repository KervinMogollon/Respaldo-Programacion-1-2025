import CL_Persona from "./CL_Persona.js";

export default class CL_Administrativo extends CL_Persona {
    constructor(nombre, edad, nivelEstud) {
        super(nombre, edad);
        this.nivelEstud = nivelEstud;
    }

    bonoNivel() {
        if (this.nivelEstud == 1) {
            if (this.edad >= 18)
                return 50
            else
                return 0
        }
        else if ((this.nivelEstud == 2) && (this.nivelEstud == 3)) {
            if (this.edad >= 18)
                return 100
            else
                return 0
        }
        else
            return 0
    }

    sueldoFi() {
        return this.sueldoBase() + this.bonoNivel()
    }
}
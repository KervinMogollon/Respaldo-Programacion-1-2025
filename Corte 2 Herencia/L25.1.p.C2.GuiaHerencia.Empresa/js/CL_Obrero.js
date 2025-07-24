import CL_Persona from "./CL_Persona.js";

export default class CL_Obrero extends CL_Persona {
    constructor(nombre, edad, cantHijos) {
        super(nombre, edad);
        this.cantHijos = cantHijos
    }

    bonoHijos() {
        if (this.cantHijos <= 3)
            return 50
        else
            return 70
    }

    sueldoF(){
        return this.sueldoBase() + this.bonoHijos()
    }
}
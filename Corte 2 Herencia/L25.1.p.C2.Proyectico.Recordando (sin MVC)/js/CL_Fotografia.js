import Recuerdo from "./CL_Recuerdo.js";

export default class Fotografia extends Recuerdo {
    constructor(cod, costBase, tipo) {
        super(cod, costBase);
        this.tipo = tipo;
    }


    montPagar() {
        if (this.tipo == "D")
            return this.costBase - (this.costBase * 0.18)
        else if (this.tipo == "I")
            return this.costBase + (this.costBase * 0.13)
        else
            return 0
    }
}


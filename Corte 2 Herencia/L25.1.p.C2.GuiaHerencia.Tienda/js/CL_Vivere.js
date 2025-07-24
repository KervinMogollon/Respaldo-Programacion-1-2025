import CL_Tienda from "./CL_Tienda.js";

export default class CL_Vivere extends CL_Tienda {
    constructor(nombre, costo, basico) {
        super(nombre, costo);
        this.basico = basico;
    }

    costoT() {
        if (this.basico == 1)
            return this.costo + (this.costo * 0.05)
        else
            return this.aumentCost()
    }
}
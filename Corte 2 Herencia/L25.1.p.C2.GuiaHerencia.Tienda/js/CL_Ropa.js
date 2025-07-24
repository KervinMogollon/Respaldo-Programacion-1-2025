import CL_Tienda from "./CL_Tienda.js";

export default class CL_Ropa extends CL_Tienda {
    constructor(nombre, costo, color) {
        super(nombre, costo);
        this.color = color;
    }

    costoTotal() {
        if (this.color == 3)
            return this.aumentCost() - (this.aumentCost * 0.10)
        else
            return this.aumentCost()
    }
}
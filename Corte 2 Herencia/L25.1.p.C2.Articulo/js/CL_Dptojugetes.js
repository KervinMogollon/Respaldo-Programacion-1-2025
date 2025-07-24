import Cl_articulo from "./CL_Articulo.js";

export default class Cl_juguetes extends Cl_articulo {
    constructor(nombre, cantidad, precioBase, edad) {
        super(nombre, cantidad, precioBase);
        this.edad = edad;
    }

    montPagar() {
        if (this.edad <= 1)
            return (this.PagoI() - (this.PagoI() * 0.1)).toFixed.apply(2)
        else
            return this.PagoI()
    }
}
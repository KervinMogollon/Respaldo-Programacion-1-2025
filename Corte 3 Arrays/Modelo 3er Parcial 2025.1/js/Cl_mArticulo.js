export default class Cl_mArticulo {
    constructor(codigo, nombre, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.costo = costo;
    }

    precio() {
        return this.costo * 1.25;
    }
}
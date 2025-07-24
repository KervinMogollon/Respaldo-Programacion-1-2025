import Ramos from "../CL_Ramo.js";

export default class mFlores extends Ramos {
    constructor({ cod, envase, costBase, cantRamos, tipo }) {
        super(cod, envase, costBase, cantRamos);
        this.tipo = tipo
    }

    set tipo(tipo) {
        this._tipo = tipo.toUpperCase()
    }

    get tipo() {
        return this._tipo
    }

    descuento() {
        if (this.tipo == "A")
            return this.costBase * 0.10
        else
            return 0
    }

    incremento() {
        if (this.tipo == "N")
            return this.costBase * 0.08
        else
            return 0
    }

    montTotal() {
        return (this.costBase - this.descuento() + this.incremento()) * this.cantRamos
    }
}
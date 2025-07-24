import Ramos from "../CL_Ramo.js";

export default class mFrutas extends Ramos {
    constructor({ cod, envase, costBase, cantRamos, extra }) {
        super(cod, envase, costBase, cantRamos);
        this.extra = extra;
    }

    set extra(extra) {
        this._extra = extra.toUpperCase()
    }

    get extra() {
        return this._extra
    }

    descuento() {
        if (this.extra == "SI")
            return this.costBase * 0.15
        else
            return 0
    }

    montTotal() {
        if (this.extra == "SI") {
            return (this.costBase - this.descuento()) * this.cantRamos
        }
        else
            return this.costBase * this.cantRamos
    }
}





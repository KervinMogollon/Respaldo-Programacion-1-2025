import Recuerdo from "../CL_Recuerdo.js";

export default class mFotografia extends Recuerdo {
    constructor({cod, costBase, tipo}) {
        super(cod, costBase);
        this.tipo = tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
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


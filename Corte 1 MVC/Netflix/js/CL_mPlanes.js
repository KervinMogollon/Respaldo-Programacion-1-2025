export default class CL_mPlanes {
    constructor(cedula, tipo) {
        this.cedula = cedula;
        this.tipo = tipo;
    }

    set cedula(cedula) {
        this._cedula = cedula;
    }

    get cedula() {
        return this._cedula;
    }

    set tipo(tipo) {
        this._tipo = tipo.toUpperCase();
    }

    get tipo() {
        return this._tipo;
    }

    pagoTipo() {
        switch (this.tipo) {
            case "A":
                return 3.3;
                break;
            case "B":
                return 5.5;
                break;
            case "C":
                return 10;
                break;
                default: "Error. Plan inexistente"
        }
    }

}
export default class CL_Vehiculo {
    constructor(placa, tipo) {
        this.placa = placa;
        this.tipo = tipo;
    }

    set placa(placa) {
        this._placa = placa;
    }

    get placa() {
        return this._placa
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo
    }

    tarifa() {
        switch (this.tipo) {
            case 1:
                return 10;
                break;
            case 2:
                return 20;
                break;
            case 3:
                return 50
                break;
            default: 0;
        }
    }
}

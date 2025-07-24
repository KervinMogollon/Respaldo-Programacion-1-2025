export default class CL_Comedor {
    constructor(iniEmpanadas, iniPastelistos, iniJugo) {
        this.acuEmpanadas = iniEmpanadas;
        this.acuPastelitos = iniPastelistos;
        this.acuJugos = iniJugo;
    }

    set acuEmpanadas(iniEmpanadas) {
        this._acuEmpanadas = +iniEmpanadas;
    }

    get acuEmpanadas() {
        return this._acuEmpanadas
    }

    set acuPastelitos(iniPastelistos) {
        this._acuPastelitos = +iniPastelistos;
    }

    get acuPastelitos() {
        return this._acuPastelitos
    }

    set acuJugos(iniJugo) {
        this._acuJugos = +iniJugo;
    }

    get acuJugos() {
        return this._acuJugos
    }

    procesarPedido(ped) {
        if (ped.orden === "empanada") {
            this.acuEmpanadas -= ped.cantOrden
        }
        else { this.acuPastelitos -= ped.cantOrden }

        if (ped.jugo === "si") {
            this.acuJugos -= 1
        }
    }

    restoEmpanadas() {
        return this.acuEmpanadas
    }

    restoPastelitos() {
        return this.acuPastelitos
    }

    restosJugos() {
        return this.acuJugos
    }
}
export default class CL_mComedor {
    constructor(iniEmpanadas, iniPastelistos, iniJugo) {
        this.iniEmpanadas = iniEmpanadas;
        this.iniPastelistos = iniPastelistos;
        this.iniJugo = iniJugo;
    }

    set iniEmpanadas(iniEmpanadas) {
        this._iniEmpanadas = +iniEmpanadas;
    }

    get iniEmpanadas() {
        return this._iniEmpanadas
    }

    set iniPastelistos(iniPastelistos) {
        this._iniPastelistos = +iniPastelistos;
    }

    get iniPastelistos() {
        return this._iniPastelistos
    }

    set iniJugo(iniJugo) {
        this._iniJugo = +iniJugo;
    }

    get iniJugo() {
        return this._iniJugo
    }

    procesarPedido(ped) {
        if (ped.orden === 1)
            this.iniEmpanadas -= ped.cantOrden

        if (ped.orden === 2)
            this.iniPastelistos -= ped.cantOrden

        if (ped.jugo === 1) 
            this.iniJugo -= 1
    }

    restoEmpanadas() {
        return this.iniEmpanadas
    }

    restoPastelitos() {
        return this.iniPastelistos
    }

    restosJugos() {
        return this.iniJugo
    }
}
export default class CL_mComedor {
    constructor(iniEmpanadas, iniPastelitos, iniJugo) {
        this.iniEmpanadas = iniEmpanadas = 0;
        this.iniPastelitos = iniPastelitos = 0;
        this.iniJugo = iniJugo = 0;
        //atributos derivados
        this.acumpPagos = 0.00
    }

    set iniEmpanadas(iniEmpanadas) {
        this._iniEmpanadas = +iniEmpanadas;
    }

    get iniEmpanadas() {
        return +this._iniEmpanadas
    }

    set iniPastelitos(iniPastelitos) {
        this._iniPastelitos = +iniPastelitos;
    }

    get iniPastelitos() {
        return +this._iniPastelitos;
    }

    set iniJugo(iniJugo) {
        this._iniJugo = +iniJugo;
    }

    get iniJugo() {
        return this._iniJugo
    }

    procesarPedido(ped) {
        this.acumpPagos += ped.costoComida()

        if (ped.orden === 1)
            this.iniEmpanadas -= ped.cantOrden

        if (ped.orden === 2)
            this.iniPastelitos -= ped.cantOrden

        if (ped.jugo === 1) 
            this.iniJugo -= 1
    }

    recaudoCafetin(){
        return this.acumpPagos
    }

    restoEmpanadas() {
        return this.iniEmpanadas
    }

    restoPastelitos() {
        return this.iniPastelitos
    }

    restosJugos() {
        return this.iniJugo
    }
}
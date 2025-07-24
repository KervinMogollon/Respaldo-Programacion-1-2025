export default class CL_mColegio {
    constructor(ic) {
        this.iniCaja = ic;
        /*Atributos Deribados*/
        this.acuTotalCaja = 0;
        this.cntEstud = 0;
        this.cntInscJul = 0;
    }

    set iniCaja(ic){
        this._iniCaja = +ic;
    }

    get iniCaja(){
        return this._iniCaja
    }

    procesarEstudiante(e) {
        this.acuTotalCaja += e.pagoF();

        this.cntEstud++

        if (e.mes === 1)
            this.cntInscJul++
    }

    montFinCaja() {
        return this.iniCaja + this.acuTotalCaja
    }

    porcInscJul() {
        return (this.cntInscJul / this.cntEstud) * 100
    }
}
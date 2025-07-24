export default class vFruta {
    constructor() {
        this.inCod = document.getElementById("frutaForm_inCod");
        this.inEnvase = document.getElementById("frutaForm_inEnvase");
        this.inCostBase = document.getElementById("frutaForm_inCostBase");
        this.inExtra = document.getElementById("frutaForm_inExtra");
        this.inCantRamos = document.getElementById("frutaForm_inCantRamos")
        this.btProcesar = document.getElementById("frutaForm_btProcesar");
    }

    get cod() {
        return this.inCod.value;
    }

    get envase() {
        return +this.inEnvase.value;
    }

    get costBase() {
        return +this.inCostBase.value;
    }

    get cantRamos() {
        return +this.inCantRamos.value;
    }

    get extra() {
        return this.inExtra.value;
    }
}
export default class vFlores{
    constructor(){
        this.inCod = document.getElementById("florForm_inCod");
        this.inEnvase = document.getElementById("florForm_inEnvase");
        this.inCostBase = document.getElementById("florForm_inCostBase");
        this.inCantRamos = document.getElementById("florForm_inCantRamos")
        this.inTipo = document.getElementById("florForm_inTipo");
        this.btProcesar = document.getElementById("florForm_btProcesar");
    }

    get cod(){
        return this.inCod.value;
    }

    get envase(){
        return +this.inEnvase.value;
    }

    get costBase(){
        return +this.inCostBase.value;
    }

    get cantRamos(){
        return +this.inCantRamos.value;
    }

    get tipo(){
        return this.inTipo.value;
    }
}
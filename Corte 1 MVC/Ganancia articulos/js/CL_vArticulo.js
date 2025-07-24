export default class CL_vArticulo {
    constructor() {
        this.inCod = document.getElementById("articuloForm_inCod");
        this.inPrecio = document.getElementById("articuloForm_inPrecio");
        this.inCostVent = document.getElementById("articuloForm_inCostVent");
        this.btProcesar = document.getElementById("articuloForm_btProcesar");
    }

    get cod() {
        return this.inCod.value;
    }

    get precio() {
        return +this.inPrecio.value;
    }

    get costVent() {
        return +this.inCostVent.value;
    }

    
}
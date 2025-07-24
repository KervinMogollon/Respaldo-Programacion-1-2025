export default class vFotografia{
    constructor(){
        this.inCod = document.getElementById("fotoForm_inCod");
        this.inCostoBase = document.getElementById("fotoForm_inCostoBase");
        this.inTipo = document.getElementById("fotoForm_inTipo");
        this.btProcesar = document.getElementById("fotoForm_btProcesarFoto");
    }

    get cod(){
        return this.inCod.value;
    }

    get costoBase(){
        return +this.inCostoBase.value;
    }

    get tipo(){
        return this.inTipo.value;
    }
}
export default class vVideo{
    constructor(){
        this.inCod = document.getElementById("videoForm_inCod");
        this.inCostoBase = document.getElementById("videoForm_inCostoBase");
        this.inFormato = document.getElementById("videoForm_inFormato");
        this.btProcesar = document.getElementById("video_btProcesarVideo");
    }

    get cod(){
        return this.inCod.value;
    }

    get costoBase(){
        return +this.inCostoBase.value;
    }

    get formato(){
        return this.inFormato.value;
    }
}
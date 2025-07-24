export default class vMueble {
    constructor() {
        this.vistaElec = document.getElementById("muebForm");
        this.inCod = document.getElementById("muebForm_inCod");
        this.inDescripcion = this.vistaElec = document.getElementById("muebForm_inDescripcion");
        this.inCosto = this.vistaElec = document.getElementById("muebForm_inCosto");
        this.inTipoArt = this.vistaElec = document.getElementById("muebForm_inTipoArt");
        this.inMaterial = document.getElementById("muebForm_inMaterial")
        this.btProcesar = this.vistaElec = document.getElementById("muebForm_btProcesar");
    }

    get cod(){
        return this.inCod.value
    }

    get descripcion(){
        return this.inDescripcion.value
    }

    get costo(){
        return +this.inCosto.value
    }

    get tipoArt(){
        return +this.inTipoArt.value
    }

    get material(){
        return +this.inMaterial.value
    }
}
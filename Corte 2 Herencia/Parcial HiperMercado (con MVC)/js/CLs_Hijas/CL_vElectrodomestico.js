export default class vElectrodomestico {
    constructor() {
        this.vistaElec = document.getElementById("elecForm");
        this.inCod = document.getElementById("elecForm_inCod");
        this.inDescripcion = this.vistaElec = document.getElementById("elecForm_inDescripcion");
        this.inCosto = this.vistaElec = document.getElementById("elecForm_inCosto");
        this.inTipoArt = this.vistaElec = document.getElementById("elecForm_inTipoArt");
        this.inTipoElec = this.vistaElec = document.getElementById("elecForm_inTipoElec");
        this.inMeseGarantia = this.vistaElec = document.getElementById("elecForm_inMeseGarantia");
        this.btProcesar = this.vistaElec = document.getElementById("elecForm_btProcesar");
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

    get tipoElec(){
        return +this.inTipoElec.value
    }

    get mesesGarantia(){
        return +this.inMeseGarantia.value
    }
}
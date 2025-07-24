import mFlores from "../CLs_Hijas/CL_mFlores.js";
import mFrutas from "../CLs_Hijas/CL_mFrutas.js";

export default class mTienda {
    constructor() {
        this.acumVentasFlores = 0.00;
        this.acumVentasFrutas = 0.00;
        this.cntFloresNaturales = 0;
        this.cntFloresNaturalesTipo2 = 0;
        this.cntCantRamosMayor1 = 0;
        this.cntCantRamosIgual1 = 0;
        this.cntRamos = 0;
    }

    procesarRamo(r) {
        if (r instanceof mFlores) {
            this.acumVentasFlores += r.montTotal()

            if (r.tipo === "N") {
                this.cntFloresNaturales++
                if (r.envase === 2) {
                    this.cntFloresNaturalesTipo2++
                }
            }
        }

        if (r instanceof mFrutas) {
            this.acumVentasFrutas += r.montTotal()
        }

        if(r.cantRamos > 1)
            this.cntCantRamosMayor1++

        if(r.cantRamos === 1)
            this.cntCantRamosIgual1++

        this.cntRamos++

    }

    montoFinal() {
        return this.acumVentasFlores + this.acumVentasFrutas
    }

    montoFinalFlores() {
        return this.acumVentasFlores
    }

    montoFinalFrutas() {
        return this.acumVentasFrutas
    }

    cantFloresNatu() {
        return this.cntFloresNaturales
    }

    cantFloresNatuEnvaMed() {
        return this.cntFloresNaturalesTipo2
    }

    porcFloresNaturaEnvaMediano() {
        if (this.cntFloresNaturales > 0)
            return (this.cntFloresNaturalesTipo2 / this.cntFloresNaturales) * 100
        else
            return 0
    }

    cantRamosMayor1(){
        return this.cntCantRamosMayor1
    }

    porcRamosIgual1(){
        if(this.cntRamos > 0)
            return (this.cntCantRamosIgual1 / this.cntRamos) * 100
    }


}
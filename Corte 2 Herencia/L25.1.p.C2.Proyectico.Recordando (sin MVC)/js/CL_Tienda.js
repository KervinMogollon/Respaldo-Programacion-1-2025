import Fotografia from "./CL_Fotografia.js";

export default class Tienda {
    constructor() {
        this.acuMontTotal = 0.00;
        this.ventDigitales = 0.00;
        this.acuDigitales = 0;
    }

    procesarRecuerdo(r) {
        this.acuMontTotal += r.montPagar();

        if (r instanceof Fotografia) {
            if (r.tipo === "D") {
                this.ventDigitales += r.montPagar()
                this.acuDigitales++
            }
        }
    }

    montoFinal() {
        return this.acuMontTotal
    }

    promdDigital() {
        return this.ventDigitales / this.acuDigitales
    }
}
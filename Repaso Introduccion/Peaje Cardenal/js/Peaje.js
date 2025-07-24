export default class CL_Peaje {
    constructor() {
        this.vehi = 0;
        this.cntType1 = 0;
        this.cntType2 = 0;
        this.cntType3 = 0;
        this.acuPago = 0;
    }

    procesarVehiculo(vehi) {
        this.vehi++

        if (vehi.tipo === 1)
            this.cntType1++

        if (vehi.tipo === 2)
            this.cntType2++

        if (vehi.tipo === 3)
            this.cntType3++

        this.acuPago += vehi.tarifa()
    }

    porc1(){
        return (this.cntType1 * 100) / this.vehi
    }

    porc2(){
        return (this.cntType2 * 100) / this.vehi
    }

    porc3(){
        return (this.cntType3 * 100) / this.vehi
    }

    impuesto(){
        return this.acuPago * 0.4
    }
}
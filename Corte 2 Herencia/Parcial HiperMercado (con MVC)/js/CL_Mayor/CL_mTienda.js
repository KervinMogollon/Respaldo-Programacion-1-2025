import mElectrodomestico from "../CLs_Hijas/CL_mElectrodomestico.js";
import mMueble from "../CLs_Hijas/CL_mMueble.js";

export default class mTienda {
    constructor() {
        this.acumTotalVentas = 0.00;
        this.cntNeveras = 0;
        this.cntCocinas = 0;
        this.cntMuebles = 0;
        this.cntMueblesMadera = 0;
        this.acumTotalVentasElec = 0.00;
        this.acumTotalVentasMueb = 0.00
    }

    procesarArticulo(a) {
        this.acumTotalVentas += a.montPagar()

        if (a instanceof mElectrodomestico) {
            this.acumTotalVentasElec += a.montPagar()

            if (a.tipoElec === 1)
                this.cntNeveras++

            if (a.tipoElec === 3)
                this.cntCocinas++
        }

        if (a instanceof mMueble) {
            this.acumTotalVentasMueb += a.montPagar()

            this.cntMuebles++

            if (a.material === 1)
                this.cntMueblesMadera++
        }
    }

    totalVentas() {
        return this.acumTotalVentas
    }

    totalVentasElec(){
        return this.acumTotalVentasElec
    }

    totalVentasMueb(){
        return this.acumTotalVentasMueb
    }

    elecMayorVendido() {
        if (this.cntNeveras > this.cntCocinas)
            return "las neveras fueron mas vendidas"
        else if (this.cntNeveras < this.cntCocinas)
            return "las cocinas fueron mas vendida"
        else
            return "ambas tuvieron la misma cantidad de ventas"
    }

    porcMuebleMadera() {
        if (this.cntMuebles > 0)
            return (this.cntMueblesMadera / this.cntMuebles) * 100
        else
            return 0
    }
}
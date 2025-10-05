import Electrodomestico from "./CLs_Hijas/CL_Electrodomestico.js";
import Mueble from "./CLs_Hijas/CL_Mueble.js";

export default class Tienda {
    constructor() {
        this.acumTotalVentas = 0.00;
        this.cntNeveras = 0;
        this.cntCocinas = 0;
        this.cntMuebles = 0;
        this.cntMueblesMadera = 0;
    }

    procesarArticulo(a) {
        this.acumTotalVentas += a.montPagar()

        if (a instanceof Electrodomestico) {
            if (a.tipoElec === 1)
                this.cntNeveras++

            if (a.tipoElec === 3)
                this.cntCocinas++
        }

        if (a instanceof Mueble) {
            this.cntMuebles++

            if (a.material === 1)
                this.cntMueblesMadera++
        }
    }

    totalVentas() {
        return this.acumTotalVentas
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
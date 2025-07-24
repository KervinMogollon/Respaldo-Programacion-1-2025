import CL_mArticulo from "./CL_mArticulo.js";
import CL_vArticulo from "./CL_vArticulo.js";

export default class CL_vTienda {
    constructor() {
        this.controlador = null;

        this.lblGananciaTotal = document.getElementById("tiendaForm_lblGananciaTotal");

        this.lblCodigoMayor = document.getElementById("tiendaForm_lblCodigoMayor");

        this.vArticulo = new CL_vArticulo();

        this.vArticulo.btProcesar.onclick = () =>
            this.controlador.procesarArticulo()
    }

    procesarArticulo() {
        this.mArticulo = new CL_mArticulo({
            cod: this.vArticulo.cod,
            precio: this.vArticulo.precio,
            costVent: this.vArticulo.costVent,
        });
        return this.mArticulo;
    }

    reportarArticulo(
        gananciaTotal,
        codigoMayor,
    ) {
        this.lblGananciaTotal.innerHTML = gananciaTotal;
        this.lblCodigoMayor.innerHTML = codigoMayor;

    }
}
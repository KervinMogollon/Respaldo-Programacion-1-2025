import mElectrodomestico from "../CLs_Hijas/CL_mElectrodomestico.js";
import vElectrodomestico from "../CLs_Hijas/CL_vElectrodomestico.js";

import mMueble from "../CLs_Hijas/CL_mMueble.js";
import vMueble from "../CLs_Hijas/CL_vMueble.js";

export default class vTienda {
    constructor() {
        this.btAgregarElec = document.getElementById("tiendaForm_btAgregarElec");
        this.btAgregarMueb = document.getElementById("tiendaForm_btAgregarMueb");

        this.controlador = null;
        this.vElec = new vElectrodomestico();
        this.vMueb = new vMueble();

        this.salida = document.getElementById("tiendaForm_salida");
        this.tablaElec = document.getElementById("tiendaForm_tablaElec");
        this.tablaSubTotalElec = document.getElementById("tiendaForm_tablaSubTotalElec");
        this.tablaMueb = document.getElementById("tiendaForm_tablaMueb");
        this.tablaSubTotalMueb = document.getElementById("tiendaForm_tablaSubTotalMueb");

        this.vElec.btProcesar.onclick = () => {
            this.controlador.procesarElectrodomestico();
            this.controlador.reporteTienda()
        }

        this.vMueb.btProcesar.onclick = () => {
            this.controlador.procesarMueble()
            this.controlador.reporteTienda()
        }
    }

    iniciarElectrodomestico() {
        this.mElec = new mElectrodomestico({
            cod: this.vElec.cod,
            descripcion: this.vElec.descripcion,
            costo: this.vElec.costo,
            tipoArt: this.vElec.tipoArt,
            tipoElec: this.vElec.tipoElec,
            mesesGarantia: this.vElec.mesesGarantia,
        });
        return this.mElec
    }

    iniciarMueble() {
        this.mMueb = new mMueble({
            cod: this.vMueb.cod,
            descripcion: this.vMueb.descripcion,
            costo: this.vMueb.costo,
            tipoArt: this.vMueb.tipoArt,
            material: this.vMueb.material,
        });
        return this.mMueb
    }

    ReporteElec(
        subTotalVentas
    ) {
        this.tablaElec.innerHTML += `
            <tr>
                <td>${this.mElec.cod}</td>
                <td>${this.mElec.montPagar()} bs.F</td>
            </tr>
        `
        this.tablaSubTotalElec.innerHTML = `
            <tr>
                <th>SubTotal de Ventas</th>
                <td>${subTotalVentas} bs.F</td>
            </tr>
        `
    }

    ReporteMueb(
        subTotalVentas
    ) {
        this.tablaMueb.innerHTML += `
            <tr>
                <td>${this.mMueb.cod}</td>
                <td>${this.mMueb.montPagar()} bs.F</td>
            </tr>
        `
        this.tablaSubTotalMueb.innerHTML = `
            <tr>
                <th>SubTotal de Ventas</th>
                <td>${subTotalVentas} bs.F</td>
            </tr>
        `
    }

    reporteTienda(
        totalVentas,
        vendidosMayor,
        porcMuebMadera,
    ) {
        this.salida.innerHTML = `
        <br><strong>El total de Ventas es:</strong> ${totalVentas} Bs.F
        <br><strong>Entre neveras y cocinas, ${vendidosMayor}</strong>
        <br><strong>Porcentaje de muebles de madera en relacion al total de muebles:</strong> ${porcMuebMadera}%
        `
    }
}
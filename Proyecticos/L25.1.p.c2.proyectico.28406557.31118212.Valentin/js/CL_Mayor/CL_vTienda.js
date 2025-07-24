import mFlores from "../CLs_Hijas/CL_mFlores.js";
import vFlores from "../CLs_Hijas/CL_vFlores.js";

import mFrutas from "../CLs_Hijas/CL_mFrutas.js";
import vFruta from "../CLs_Hijas/CL_vFrutas.js";

export default class vTienda {
    constructor() {
        this.controlador = null;

        this.vFlor = new vFlores();
        this.vFrut = new vFruta();

        this.salida = document.getElementById("salida");
        this.tabla1 = document.getElementById("tabla1")
        this.tabla2 = document.getElementById("tabla2")
        this.subT1 = document.getElementById("subT1")
        this.subT2 = document.getElementById("subT2")

        this.vFlor.btProcesar.onclick = () => {
            this.controlador.procesarFlores()
        }

        this.vFrut.btProcesar.onclick = () => {
            this.controlador.procesarFrutas()
        }
    }

    iniciarFlores() {
        this.mFlor = new mFlores({
            cod: this.vFlor.cod,
            envase: this.vFlor.envase,
            costBase: this.vFlor.costBase,
            cantRamos: this.vFlor.cantRamos,
            tipo: this.vFlor.tipo,
        })
        return this.mFlor;
    }

    iniciarFrutas() {
        this.mFrut = new mFrutas({
            cod: this.vFrut.cod,
            envase: this.vFrut.envase,
            costBase: this.vFrut.costBase,
            cantRamos: this.vFrut.cantRamos,
            extra: this.vFrut.extra,
        })
        return this.mFrut;
    }

    reporte1(subTotalFlores,
        pagoTotal,
        cantFlorNat,
        cantFloresNatEnvaMed,
        porcentaje,
        cantRamosMay1,
        porcRamosCant1
    ) {
        this.tabla1.innerHTML += `
            <table>
                <tr>
                    <td>${this.mFlor.cod}</td>
                    <td>${this.mFlor.envase}</td>
                    <td>${this.mFlor.costBase}$</td>
                    <td>${this.mFlor.tipo}</td>
                    <td>${this.mFlor.descuento()}$</td>
                    <td>${this.mFlor.incremento()}$</td>
                    <td>${this.mFlor.montTotal()}$</td>
                </tr>`
        this.subT1.innerHTML = `
                <tr>
                    <th>Monto Total de Ramo de Flores</th>
                    <td>${subTotalFlores}$</td>
                </tr>`


        this.salida.innerHTML = `
            <strong>Total pagado:</strong> ${pagoTotal}$
        <br><strong>Cantidad de flores naturales:</strong> ${cantFlorNat}
        <br><strong>Cantidad de flores naturales con envase mediano:</strong> ${cantFloresNatEnvaMed}
        <br><strong>Porcentaje de flores naturales con envase mediano:</strong> ${porcentaje}%
        <br><strong>Cantidad de Ramos con Cantidad > 1:</strong> ${cantRamosMay1}
        <br><strong>Porcentaje de Ramos con Cantidad 1:</strong> ${porcRamosCant1}%
        `
    }

    reporte2(subTotalFrutas, pagoTotal, cantFlorNat, cantFloresNatEnvaMed, porcentaje, cantRamosMay1,
        porcRamosCant1) {
        this.tabla2.innerHTML += `
                <tr>
                    <td>${this.mFrut.cod}</td>
                    <td>${this.mFrut.envase}</td>
                    <td>${this.mFrut.costBase}$</td>
                    <td>${this.mFrut.extra}</td>
                    <td>${this.mFrut.descuento()}$</td>
                    <td>${this.mFrut.montTotal()}$</td>
                </tr>`

        this.subT2.innerHTML = `
                <tr>
                    <th>Monto Total de Ramo de Frutas</th>
                    <td>${subTotalFrutas}$</td>
                </tr>

            </table>
        `

        this.salida.innerHTML = `
            <strong>Total pagado:</strong> ${pagoTotal}$
        <br><strong>Cantidad de flores naturales:</strong> ${cantFlorNat}
        <br><strong>Cantidad de flores naturales con envase mediano:</strong> ${cantFloresNatEnvaMed}
        <br><strong>Porcentaje de flores naturales con envase mediano:</strong> ${porcentaje}%
        <br><strong>Cantidad de Ramos con Cantidad > 1:</strong> ${cantRamosMay1}
        <br><strong>Porcentaje de Ramos con Cantidad 1:</strong> ${porcRamosCant1}%
        `
    }

}
import mFotografia from "./Hijas/CL_mFotografia.js";
import vFotografia from "./Hijas/CL_vFotografia.js";

import mVideo from "./Hijas/CL_mVideo.js";
import vVideo from "./Hijas/CL_vVideos.js";

export default class vTienda {
    constructor() {
        this.controlador = null;

        this.vFoto = new vFotografia();
        this.vVid = new vVideo();

        this.salida = document.getElementById("salida");
        this.tablaFoto = document.getElementById("tablaFoto");
        this.tablaVideo = document.getElementById("tablaVideo");

        this.vFoto.btProcesar.onclick = () => {
            this.controlador.procesarFoto();
        }

        this.vVid.btProcesar.onclick = () => {
            this.controlador.procesarVideo();
        }
    }

    iniciarFotografia() {
        this.mFoto = new mFotografia({
            cod: this.vFoto.cod,
            costBase: this.vFoto.costoBase,
            tipo: this.vFoto.tipo,
        });
        return this.mFoto
    }

    iniciarVideo() {
        this.mVid = new mVideo({
            cod: this.vVid.cod,
            costBase: this.vVid.costoBase,
            formato: this.vVid.formato,
        });
        return this.mVid
    }

    reporte1(montoFinal, promdDigital) {
        this.tablaFoto.innerHTML += `
        <tr>
            <td>${this.mFoto.cod}</td>
            <td>${this.mFoto.montPagar()}</td>
        </tr>
        `;

        this.salida.innerHTML = `
        <br>Total vendido ${montoFinal}$
        <br>El promedio de ventas de promociones de fotos digitales vendidas ${promdDigital} 
        <br>`
    }

    reporte2(montoFinal, promdDigital) {
        this.tablaVideo.innerHTML += `
        <tr>
            <td>${this.mVid.cod}</td>
            <td>${this.mVid.montPagar()}</td>
        </tr>
        `;

        this.salida.innerHTML = `
        <br>Total vendido ${montoFinal}$
        <br>El promedio de ventas de promociones de fotos digitales vendidas ${promdDigital} 
        <br>`
        
    }
}
import CL_mEstudiante from "./mEstudiante.js";
import CL_vEstudiante from "./vEstudiante.js";

export default class CL_vColegio {
    constructor() {
        this.inIniCaja = document.getElementById("coleForm_inIniCaja");
        this.btIniciar = document.getElementById("coleForm_btIniciar");

        this.controlador = null

        this.vEstud = new CL_vEstudiante();


        this.tabla = document.getElementById("coleForm_tabla");
        this.salida = document.getElementById("coleForm_salida");

        this.vEstud.btProcesar.onclick = () => {
            this.controlador.procesarEstudiante();
        }
        this.btIniciar.onclick = () => {
            this.controlador.iniciarColegio(
                this.inIniCaja.value
            );
            this.inIniCaja.disabled = true;
            this.vEstud.inDesc.disabled = true;
            this.btIniciar.hidden = true;
        }
    }

    IniciarEstudiante() {
        this.mEstud = new CL_mEstudiante({
            n: this.vEstud.nombre,
            c: this.vEstud.cedula,
            m: this.vEstud.mes,
            ni: this.vEstud.nivel,
            d: this.vEstud.desc,
        });
        return this.mEstud;
    }

    reporte(montoFinal, porcJuls) {
        this.tabla.innerHTML += `
        <tr>
            <td>${this.mEstud.nombre}</td>  
            <td>${this.mEstud.cedula}</td>  
            <td>${this.mEstud.montDesc()}</td>  
            <td>${this.mEstud.pagoF()}</td>            
        <tr>
        `;

        this.salida.innerHTML = `
        <br>El monto Final en caja es de: ${montoFinal}
        <br>El porcentaje de Incritos en Julios fue de: ${porcJuls}
        `
    }
}
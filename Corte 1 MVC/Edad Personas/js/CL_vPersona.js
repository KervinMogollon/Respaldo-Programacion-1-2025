import CL_mEdad from "./CL_mEdad.js";
import CL_vEdad from "./CL_vEdad.js";

export default class CL_vPersona{
    constructor() {
        this.controlador = null;

        this.lblPromedioEdad = document.getElementById("mainForm_lblPromedioEdad");

        this.vEdad = new CL_vEdad();

        this.vEdad.btProcesar.onclick = () => this.controlador.procesarEdad();
    }

    procesarEdad(){
        this.mEdad = new CL_mEdad({
            edad: this.vEdad.edad
        });
        return this.mEdad;
    }

    reporteEdad(promedioEdad){
        this.lblPromedioEdad.innerHTML = promedioEdad;
    }
}
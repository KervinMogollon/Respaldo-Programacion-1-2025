import mTienda from "./CL_Mayor/CL_mTienda.js";
import vTienda from "./CL_Mayor/CL_vTienda.js";
import CL_Controlador from "./Controlador.js";

export default class CL_Main {
    constructor() {
        let modelo = new mTienda(),
            vista = new vTienda(),
            controlador = new CL_Controlador(modelo, vista);

        vista.controlador = controlador
    }


}
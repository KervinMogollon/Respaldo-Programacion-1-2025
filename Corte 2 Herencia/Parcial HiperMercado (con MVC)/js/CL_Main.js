import mTienda from "./CL_Mayor/CL_mTienda.js";
import vTienda from "./CL_Mayor/CL_vTienda.js";

import Controlador from "./CL_controlador.js";

export default class Main {
    constructor() {
        let modelo = new mTienda(),
            vista = new vTienda(),
            controlador = new Controlador(modelo, vista);

            vista.controlador = controlador;
    }
}
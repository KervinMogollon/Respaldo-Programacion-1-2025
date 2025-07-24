/**
 * GANANCIA ARTÍCULOS
Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.

El encargado de la tienda informa que dispone de los siguientes artículos: 
codigo(costo, precio de Venta)
888 ($10, $15)
777 ($20, $25)
999 ($15, $25)
666 ($25, $35)
111 ($50, $70)
333 ($40, $50)
444 ($80, $100)
222 ($5, $10)

Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444
 */

import CL_mTienda from "./CL_mTienda.js";
import CL_vTienda from "./CL_vTienda.js";
import CL_Controlador from "./CL_Controlador.js";

export default class CL_Principal {
    constructor() {
        let modelo = new CL_mTienda(),
            vista = new CL_vTienda(),
            controlador = new CL_Controlador(modelo, vista);
        vista.controlador = controlador
    }
}
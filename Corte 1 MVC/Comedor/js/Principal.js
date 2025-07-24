/**
 * EL COMEDOR
Se tienen cierta cantidad suficiente de empanadas (Bs.20 c/u), pastelitos (Bs.10 c/u) y jugo
(Bs.5 c/u). Los comensales piden sólo un tipo de comida, su cantidad y si quieren o no jugo. Se
desea conocer cuánto pagará el comensal. También se quiere saber cuánto queda de cada
comida al final y cuánto dinero recibió el cafetín.
Si el cafetín tiene 20 empanadas, 15 pastelitos y 10 jugos, y:

Elvis compra 3 pastelitos
Joao 2 empanadas con jugo
Melisa 5 empanadas
María 2 pastelitos con jugo
Rosa 10 empanadas

la salida sería como sigue:
Elvis paga Bs.30
Joao paga Bs.45
Melisa paga Bs.100
María paga Bs.25
Rosa paga Bs.200
Quedan 3 empanadas
Quedan 8 pastelitos
Quedan 8 jugos
 */

import CL_mComedor from "./CL_mComedor.js";
import CL_vComedor from "./CL_vComedor.js";
import CL_controlador from "./CL_Controlador.js";

export default class CL_Principal{
    constructor(){
        let vista = new CL_vComedor();
        let modelo = new CL_mComedor();
        let controlador = new CL_controlador(modelo, vista);
        vista.controlador = controlador
    }

    
    

}
/*
Una tienda planea incrementar el 20% del costo para establecer
el precio de venta de sus artículos (1=ropa, 2=víveres),
conociendo su nombre y costo. Para la ropa de color rojo
(1=blanco, 2=azul, 3=rojo) otorgará un 10% de descuento. Los
víveres no tienen descuento, pero si es un producto básico, sólo
aplicará un 5% del costo para la ganancia.
*/

import CL_Ropa from "./CL_Ropa.js";
import CL_Vivere from "./CL_Vivere.js";

export default class CL_Main {
    constructor() {
        let viv1 = new CL_Vivere("leche", 10, 1),
            rop1 = new CL_Ropa("camisa", 20, 2),
            rop2 = new CL_Ropa("Short", 20, 30),
            viv2 = new CL_Vivere("toddy", 30, 0),
            rop3 = new CL_Ropa("Blusa", 40, 30);
    }
}
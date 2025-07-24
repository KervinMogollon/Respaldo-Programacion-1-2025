/**
 * LA BODEGA
En una bodega se tiene el costo de varios artículos y se le piensa ganar a cada uno el 50%...
Hacer un programa que calcule el total de ganancia que tendrá la bodega al venderlos todos.
Ej. Costos varios artículos: 10, 20, 14, 6 y 4
La salida requerida presenta el siguiente formato:
La ganancia será de Bs.27
 */

import CL_Bodega from "./Bodega.js";
import CL_Producto from "./Producto.js";

let producto1 = new CL_Producto(10);
let producto2 = new CL_Producto(20);
let producto3 = new CL_Producto(14);
let producto4 = new CL_Producto(6);
let producto5 = new CL_Producto(4);

let bode = new CL_Bodega();

bode.procesarProducto(producto1);
bode.procesarProducto(producto2);
bode.procesarProducto(producto3);
bode.procesarProducto(producto4);
bode.procesarProducto(producto5);

let salida = document.getElementById("salida")

salida.innerHTML = `
La ganancia será de: ${bode.gananciaTotal()}Bs
`
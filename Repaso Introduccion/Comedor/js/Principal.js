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

import CL_Pedido from "./Pedido.js";
import CL_Comedor from "./Comedor.js";

let ped1 = new CL_Pedido("Elvis", "pastelito", 3),
    ped2 = new CL_Pedido("Joao", "empanada", 2, "si"),
    ped3 = new CL_Pedido("Melisa", "empanada", 5),
    ped4 = new CL_Pedido("María", "pastelito", 2, "si"),
    ped5 = new CL_Pedido("Rosa", "empanada", 10);

let com = new CL_Comedor(20, 15, 10);

com.procesarPedido(ped1);
com.procesarPedido(ped2);
com.procesarPedido(ped3);
com.procesarPedido(ped4);
com.procesarPedido(ped5);

let salida = document.getElementById("salida")

salida.innerHTML = `Facturas de Pedidos
<br>${ped1.nombre} paga ${ped1.costoComida()}Bs
<br>${ped2.nombre} paga ${ped2.costoComida()}Bs
<br>${ped3.nombre} paga ${ped3.costoComida()}Bs
<br>${ped4.nombre} paga ${ped4.costoComida()}Bs
<br>${ped5.nombre} paga ${ped5.costoComida()}Bs
<br>
<br>Existencias Restantes del Comedor
<br>Quedan ${com.restoEmpanadas()} Empanadas
<br>Quedan ${com.restoPastelitos()} Pastelitos
<br>Quedan ${com.restosJugos()} jugos
`
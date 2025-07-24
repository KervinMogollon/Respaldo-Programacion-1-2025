/**
 * PEAJE CARDENAL
El peaje cardenal cobra 3 tipos de tarifas (1, 2 ó 3) de vehículos: 1=bs.10 particulares, 2=bs.20
transporte, 3=bs.50 carga. Conociendo la placa y el tipo de vehículo se desea informar, por cada
vehículo: su tarifa a pagar y por el peaje: el porcentaje de cada tipo de vehículo y el monto total
para el municipio, sabiendo que es el 40% de todo lo cobrado.
Al ser consultada por la forma como desean que se presente la salida, el peaje cardenal
suministra el siguiente formato, sobre la base de los siguientes datos:
(placa, tipo vehículo)
(KBS11E, 1) (XXES12, 2) (YXZQE1, 3) (KBS23E, 1)
Vehículo con placa KBS11E su tarifa a pagar 10 Bs
Vehículo con placa XXES12 su tarifa a pagar 20 Bs
Vehículo con placa YXZQE1 su tarifa a pagar 50 Bs
Vehículo con placa KBS23E su tarifa a pagar 10 Bs
Porcentaje de vehículo tipo particular 50%
Porcentaje de vehículo tipo transporte 25%
Porcentaje de vehículo tipo carga 25%
Monto total para el municipio: 36 Bs
 */

import CL_Peaje from "./Peaje.js";
import CL_Vehiculo from "./Vehiculo.js";

let vehiculo1 = new CL_Vehiculo("KBS11E",1);
let vehiculo2 = new CL_Vehiculo("XXES12",2);
let vehiculo3 = new CL_Vehiculo("YXZQE1",3);
let vehiculo4 = new CL_Vehiculo("KBS23E",1);

let pea = new CL_Peaje();

pea.procesarVehiculo(vehiculo1);
pea.procesarVehiculo(vehiculo2);
pea.procesarVehiculo(vehiculo3);
pea.procesarVehiculo(vehiculo4);

let salida = document.getElementById("salida")

salida.innerHTML=`
<br>Vehículo con placa ${vehiculo1.placa} su tarifa a pagar ${vehiculo1.tarifa()} Bs
<br>Vehículo con placa ${vehiculo2.placa} su tarifa a pagar ${vehiculo2.tarifa()} Bs
<br>Vehículo con placa ${vehiculo3.placa} su tarifa a pagar ${vehiculo3.tarifa()} Bs
<br>Vehículo con placa ${vehiculo4.placa} su tarifa a pagar ${vehiculo4.tarifa()} Bs
<br>
<br>Porcentaje de vehículo tipo particular: ${(pea.porc1()).toFixed(2)}%
<br>Porcentaje de vehículo tipo transporte: ${(pea.porc2()).toFixed(2)}%
<br>Porcentaje de vehículo tipo carga: ${(pea.porc3()).toFixed(2)}%
<br>
<br>Monto total para el municipio: ${pea.impuesto()} Bs
`

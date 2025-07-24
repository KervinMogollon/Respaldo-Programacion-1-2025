/**
 * INFO EMPLEADOS
En una empresa se tiene personal obrero y personal administrativo. La empresa necesita
determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que 
Juan (obrero) actualmente gana $100
Ana (obrero) gana $120
Lin (administrativo) gana $200
Mary (obrero) gana $50
Carlos (administrativo) gana $150

Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90
Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175
 */

import CL_Personal from "./Personal.js";
import CL_Empresa from "./Empresa.js";

let pers1 = new CL_Personal("Juan", "O", 100),
    pers2 = new CL_Personal("Ana", "O", 120),
    pers3 = new CL_Personal("Lin", "A", 200),
    pers4 = new CL_Personal("Mary", "O", 50),
    pers5 = new CL_Personal("Carlos", "A", 150);

let empr = new CL_Empresa();

empr.procesarPersonal(pers1);
empr.procesarPersonal(pers2);
empr.procesarPersonal(pers3);
empr.procesarPersonal(pers4);
empr.procesarPersonal(pers5);

let salida = document.getElementById("salida")

salida.innerHTML = `
<br>Monto total pagado a obreros: ${(empr.pagaObreros()).toFixed(2)} $
<br>Promedio pagado a ${empr.cntObreros} obreros: ${(empr.promdObreros()).toFixed(2)} $
<br>
<br>Monto total pagado a administrativos: ${(empr.pagaAdmins()).toFixed(2)} $
<br>Promedio pagado a ${empr.cntAdmins} administrativos: ${(empr.promdAdmins()).toFixed(2)} $
`

